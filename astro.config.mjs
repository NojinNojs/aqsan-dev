// @ts-check
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://aqsan.dev',
  env: {
    schema: {
      PUBLIC_SITE_URL: envField.string({ context: 'client', access: 'public', optional: true, default: 'https://aqsan.dev' }),
      PUBLIC_EMAIL: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_GITHUB_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_LINKEDIN_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_INSTAGRAM_URL: envField.string({ context: 'client', access: 'public', optional: true }),
      PUBLIC_WHATSAPP: envField.string({ context: 'client', access: 'public', optional: true }),
    },
  },
  integrations: [
    icon(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  server: {
    host: true, // Allow connections from network
  },
  vite: {
    server: {
      allowedHosts: true, // Allow ngrok URLs
    }
  }
});
