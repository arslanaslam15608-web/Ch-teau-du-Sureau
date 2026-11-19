import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

interface RouterContextValue {
  pathname: string;
  search: string;
  navigate: (to: string) => void;
  isReserveOpen: boolean;
  openReserve: () => void;
  closeReserve: () => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

export function normalizePath(path: string): string {
  const [clean] = path.split('?');
  if (!clean || clean === '/') return '/';
  return clean.endsWith('/') ? clean : `${clean}/`;
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locationState, setLocationState] = useState(() => ({
    pathname: normalizePath(window.location.pathname),
    search: window.location.search,
  }));
  const [isReserveOpen, setIsReserveOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => {
      setLocationState({
        pathname: normalizePath(window.location.pathname),
        search: window.location.search,
      });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('tel:') || to.startsWith('mailto:')) {
      const link = document.createElement('a');
      link.href = to;
      if (to.startsWith('http://') || to.startsWith('https://')) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    const [rawPath, rawSearch] = to.split('?');
    const normalized = normalizePath(rawPath);
    const search = rawSearch ? `?${rawSearch}` : '';
    window.history.pushState({}, '', `${normalized}${search}`);
    setLocationState({ pathname: normalized, search });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openReserve = useCallback(() => setIsReserveOpen(true), []);
  const closeReserve = useCallback(() => setIsReserveOpen(false), []);

  return (
    <RouterContext.Provider
      value={{
        pathname: locationState.pathname,
        search: locationState.search,
        navigate,
        isReserveOpen,
        openReserve,
        closeReserve,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used inside RouterProvider');
  return ctx;
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [title, description]);
}
