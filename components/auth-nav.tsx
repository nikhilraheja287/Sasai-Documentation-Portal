'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth-provider';

export function AuthNav() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return (
      <Link
        href="/login"
        className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
      >
        Login
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/docs/api-documentation"
        className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
      >
        API References
      </Link>
      <button
        type="button"
        onClick={() => {
          logout();
          router.push('/docs');
          router.refresh();
        }}
        className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
      >
        Logout
      </button>
    </div>
  );
}

