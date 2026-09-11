import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://www.jimmysremovalsltd.co.uk',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/thank-you') &&
        !page.includes('/llms.txt') &&
        !page.includes('/robots.txt'),
      serialize: (item) => {
        const url = item.url;
        // Priority & changefreq configuration
        if (
          url === 'https://www.jimmysremovalsltd.co.uk/' ||
          url.includes('/removals/house-removals/') ||
          url.includes('/removals/man-and-van/') ||
          url.includes('/areas/birmingham/') ||
          url.includes('/areas/wolverhampton/') ||
          url.includes('/areas/coventry/') ||
          url.includes('/areas/solihull/') ||
          url.includes('/areas/dudley/') ||
          url.includes('/areas/walsall/') ||
          url.includes('/areas/west-bromwich/') ||
          url.includes('/areas/sutton-coldfield/') ||
          url.includes('/areas/stourbridge/')
        ) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.includes('/blog/')) {
          item.priority = 0.6;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        theme: path.resolve(__dirname, './theme')
      }
    }
  }
});
