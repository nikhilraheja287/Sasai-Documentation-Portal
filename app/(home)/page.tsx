import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="sasai-home">
      <section className="sasai-home-hero">
        <div>
          <span className="sasai-home-kicker">Sasai Docs</span>
          <h1 className="sasai-home-title">Build faster with clear product docs.</h1>
          <p className="sasai-home-copy">
            Ship sandbox and production integrations with focused setup guides, API usage examples,
            and operational best practices for Sasai products.
          </p>
          <div className="sasai-home-actions">
            <Link href="/docs" className="sasai-home-primary">
              Browse documentation
            </Link>
            {/* <Link href="/docs/getting-started/api-keys" className="sasai-home-secondary">
              View API keys guide
            </Link> */}
          </div>
        </div>
      </section>

      {/* <section className="sasai-home-grid">
        <article className="sasai-home-card">
          <h2 className="sasai-home-card-title">Quick onboarding</h2>
          <p className="sasai-home-card-copy">
            Start with authentication, client secrets, and server-side API key setup.
          </p>
        </article>
        <article className="sasai-home-card">
          <h2 className="sasai-home-card-title">Implementation-ready examples</h2>
          <p className="sasai-home-card-copy">
            Use focused snippets and endpoint guidance instead of generic placeholder docs.
          </p>
        </article>
        <article className="sasai-home-card">
          <h2 className="sasai-home-card-title">Operational guidance</h2>
          <p className="sasai-home-card-copy">
            Document webhooks, architecture, and error handling in a way developers can act on.
          </p>
        </article>
      </section> */}
    </main>
  );
}
