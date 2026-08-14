import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APP_URL = 'https://refract-dev.vercel.app';

// Redirect stubs and app entry points must never reach the sitemap.
const hiddenPaths = ['/login', '/signup', '/dashboard', '/help', '/changelog', '/roadmap', '/status', '/about'];

// Crawl priority follows how much the page matters for discovery, not how new it is.
const priorityByPath = {
  '/': 1,
  '/product/': 0.9,
  '/pricing/': 0.9,
  '/docs/': 0.7,
  '/docs/faq/': 0.7,
  '/contact/': 0.5,
  '/security/': 0.5,
  '/privacy/': 0.3,
  '/terms/': 0.3,
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
      serialize: (item) => {
        const { pathname } = new URL(item.url);
        return {
          ...item,
          priority: priorityByPath[pathname] ?? 0.6,
        };
      },
    }),
  ],
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
    '/about': '/',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
