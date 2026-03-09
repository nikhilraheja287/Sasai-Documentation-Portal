'use client';

import Link from 'next/link';
import { AuthNav } from '@/components/auth-nav';

export function DocsTopNav() {
  return (
    <header className="sasai-docs-top-nav">
      <div className="sasai-docs-top-nav-inner">
        <Link href="/docs" className="sasai-docs-top-nav-brand">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#1473e6] text-sm font-semibold text-white shadow-sm">
            S
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-slate-950">Sasai</span>
            <span className="text-xs font-medium text-slate-500">Sasai Docs</span>
          </span>
        </Link>

        {/* <nav className="sasai-docs-top-nav-links" aria-label="Docs navigation">
          <Link href="/docs" className="sasai-docs-top-nav-link">
            Documentation
          </Link>
          <Link href="/docs/getting-started" className="sasai-docs-top-nav-link">
            Getting Started
          </Link>
        </nav> */}

        <div className="sasai-docs-top-nav-actions">
          <AuthNav />
        </div>
      </div>
    </header>
  );
}

