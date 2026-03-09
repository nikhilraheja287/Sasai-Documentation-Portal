'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

const AUTH_STORAGE_KEY = 'sasai-auth-user';

type AuthContextValue = {
  isLoggedIn: boolean;
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) setEmail(stored);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      isLoggedIn: email !== null,
      email,
      login(nextEmail: string) {
        setEmail(nextEmail);
        if (typeof window !== 'undefined') {
          localStorage.setItem(AUTH_STORAGE_KEY, nextEmail);
        }
      },
      logout() {
        setEmail(null);
        if (typeof window !== 'undefined') {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      },
    }),
    [email],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}

