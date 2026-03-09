'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth-provider';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(email);
    router.push('/docs');
    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-md items-center px-6 py-12">
      <section className="w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1473e6]">Login</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-950">Sign in to Sasai</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          For now, any email and password will work.
        </p>

        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Email ID</span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-[#1473e6]"
              placeholder="name@company.com"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
            <input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-[#1473e6]"
              placeholder="Enter your password"
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#1473e6] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0f66ce]"
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}

