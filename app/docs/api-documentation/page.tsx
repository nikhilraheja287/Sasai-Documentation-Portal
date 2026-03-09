import { createOpenAPI } from 'fumadocs-openapi/server';
import { createAPIPage } from 'fumadocs-openapi/ui';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import type { Metadata } from 'next';

const openapi = createOpenAPI({
  input: ['openapi/sasai-openapi.json'],
});

const APIPage = createAPIPage(openapi);

export const metadata: Metadata = {
  title: 'API Documentation',
  description: 'Interactive OpenAPI reference for Sasai endpoints.',
};

export default function Page() {
  return (
    <DocsPage
      className="sasai-docs-page"
      breadcrumb={{ enabled: false }}
      tableOfContent={{ enabled: false }}
    >
      <div className="sasai-docs-hero">
        <DocsTitle>API Documentation</DocsTitle>
        <DocsDescription className="sasai-page-description">
          Interactive reference generated from the Sasai OpenAPI schema.
        </DocsDescription>
      </div>

      <DocsBody>
        <APIPage
          document="openapi/sasai-openapi.json"
          showTitle
          showDescription
          operations={[
            { path: '/v1/health', method: 'get' },
            { path: '/v1/remitsense/transactions', method: 'post' },
            { path: '/v1/remitsense/transactions/{transactionId}', method: 'get' },
          ]}
        />
      </DocsBody>
    </DocsPage>
  );
}

