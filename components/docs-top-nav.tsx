'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { AuthNav } from '@/components/auth-nav';
import logo from '@/app/images/logo.png';

export function DocsTopNav() {
  const pathname = usePathname();
  const productLabel = (() => {
    if (pathname.startsWith('/docs/remitsense')) return 'RemitSense';
    if (pathname.startsWith('/docs/insuresense')) return 'InsureSense';
    if (pathname.startsWith('/docs/creditsense')) return 'CreditSense';
    if (pathname.startsWith('/docs/meshsense')) return 'MeshSense';
    return 'Documentation';
  })();
  const showBackArrow = pathname.startsWith('/docs/remitsense')
    || pathname.startsWith('/docs/insuresense')
    || pathname.startsWith('/docs/creditsense')
    || pathname.startsWith('/docs/meshsense');

  return (
    <header className="sasai-docs-top-nav">
      <div className="sasai-docs-top-nav-inner">
        {showBackArrow ? (
          <Link
            href="/"
            aria-label="Back to Sasai Products"
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
          >
            <ArrowLeft className="size-4" />
          </Link>
        ) : null}

        <Link href="/docs" className="sasai-docs-top-nav-brand">
          <Image src={logo} alt="Sasai logo" className="h-10 w-auto" priority />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-slate-950">Sasai Docs</span>
            <span className="text-xs font-medium text-slate-500">{productLabel}</span>
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

