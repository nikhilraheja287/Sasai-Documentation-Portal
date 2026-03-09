import { ProvideLinksToolSchema } from '../../../lib/inkeep-qa-schema';
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  generateId,
  streamText,
} from 'ai';

export const runtime = 'edge';

function createErrorResponse(message: string, status = 503) {
  const id = generateId();

  return createUIMessageStreamResponse({
    status,
    stream: createUIMessageStream({
      execute: ({ writer }) => {
        writer.write({ type: 'text-start', id });
        writer.write({ type: 'text-delta', id, delta: message });
        writer.write({ type: 'text-end', id });
      },
    }),
  });
}

function getFriendlyErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);

  if (message.includes('Not authenticated') || message.includes('Forbidden')) {
    return 'AI chat is not authenticated with Inkeep. Add a valid `INKEEP_API_KEY` to your environment and restart the dev server.';
  }

  return 'AI chat is temporarily unavailable. Please verify the Inkeep configuration and try again.';
}

export async function POST(req: Request) {
  const apiKey = process.env.INKEEP_API_KEY;
  if (!apiKey) {
    return createErrorResponse(
      'AI chat is not configured yet. Add `INKEEP_API_KEY` to your environment and restart the app.',
    );
  }

  const reqJson = await req.json();

  const openai = createOpenAICompatible({
    name: 'inkeep',
    apiKey,
    baseURL: 'https://api.inkeep.com/v1',
  });

  try {
    const result = streamText({
      model: openai('inkeep-qa-sonnet-4'),
      tools: {
        provideLinks: {
          inputSchema: ProvideLinksToolSchema,
        },
      },
      messages: await convertToModelMessages(reqJson.messages, {
        ignoreIncompleteToolCalls: true,
      }),
      toolChoice: 'auto',
    });

    return result.toUIMessageStreamResponse({
      onError: (error) => getFriendlyErrorMessage(error),
    });
  } catch (error) {
    return createErrorResponse(getFriendlyErrorMessage(error));
  }
}
