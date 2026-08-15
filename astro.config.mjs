import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APP_URL = 'https://refract-dev.vercel.app';

// Redirect stubs and app entry points must never reach the sitemap.
const hiddenPaths = ['/login', '/signup', '/dashboard', '/help', '/changelog', '/roadmap', '/status'];

// Crawl priority follows how much the page matters for discovery, not how new it is.
const locales = ['en', 'pt', 'es', 'fr', 'de', 'ja', 'zh'];

const priorityByPath = {
  '/': 1,
  '/product/': 0.9,
  '/pricing/': 0.9,
  '/docs/': 0.7,
  '/docs/faq/': 0.7,
  '/about/': 0.4,
  '/contact/': 0.5,
  '/security/': 0.5,
  '/privacy/': 0.3,
  '/terms/': 0.3,
};

const stripLocalePrefix = (pathname) => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] && locales.includes(parts[0]) && parts[0] !== 'en') {
    const rest = parts.slice(1).join('/');
    if (!rest) return '/';
    return pathname.endsWith('/') ? `/${rest}/` : `/${rest}`;
  }
  return pathname;
};

const isHidden = (url) => {
  const { pathname } = new URL(url);
  return hiddenPaths.some((hidden) => pathname === hidden || pathname === `${hidden}/`);
};

export default defineConfig({
  site: 'https://devrefract.com',
  integrations: [
    sitemap({
      filter: (page) => !isHidden(page),
      changefreq: 'weekly',
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          pt: 'pt',
          es: 'es',
          fr: 'fr',
          de: 'de',
          ja: 'ja',
          zh: 'zh-Hans',
        },
      },
      serialize: (item) => {
        const { pathname } = new URL(item.url);
        const bare = stripLocalePrefix(pathname);
        return {
          ...item,
          priority: priorityByPath[bare] ?? priorityByPath[pathname] ?? 0.6,
        };
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es', 'fr', 'de', 'ja', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  output: 'static',
  redirects: {
    '/login': APP_URL,
    '/signup': APP_URL,
    '/dashboard': APP_URL,
    '/help': '/docs/faq',
    '/faq': '/docs/faq',
    '/changelog': '/',
    '/roadmap': '/product',
    '/status': '/',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
