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
  redirects: {
    '/clean-air-zone/': '/guides/birmingham-clean-air-zone-removals/',
    '/moving-guides/moving-into-birmingham-clean-air-zone/': '/guides/birmingham-clean-air-zone-removals/',
    '/moving-guides/how-much-do-removals-cost-uk/': '/guides/house-removal-costs-birmingham/',
    '/guides/': '/moving-guides/',
    '/services/piano-removals/': '/services/piano-and-specialist-moves/',
    '/removals/piano-removals/': '/services/piano-and-specialist-moves/',
    '/removals/house-removals/': '/services/house-removals/',
    '/removals/flat-removals/': '/services/flat-removals/',
    '/removals/man-and-van/': '/services/man-and-van/',
    '/removals/office-removals/': '/services/office-removals/',
    '/removals/packing-services/': '/services/packing-services/',
    '/removals/storage/': '/services/storage/',
    '/removals/student-moves/': '/services/student-moves/',
    '/removals/student-removals/': '/services/student-moves/',
    '/services/student-removals/': '/services/student-moves/',
    '/removals/piano-and-specialist-moves/': '/services/piano-and-specialist-moves/',
    '/removals/long-distance-removals/': '/services/long-distance-removals/',
    '/removals/house-clearance/': '/services/house-clearance/',
    '/removals/furniture-dismantling/': '/services/furniture-dismantling/',
    '/removals/furniture-removals/': '/services/furniture-removals/',
    '/removals/same-day-delivery/': '/services/same-day-delivery/',
    // Inverted service × town redirects
    '/removals/flat-removals/birmingham/': '/removals/birmingham/flat-removals/',
    '/removals/furniture-dismantling/birmingham/': '/removals/birmingham/furniture-dismantling/',
    '/removals/furniture-removals/birmingham/': '/removals/birmingham/furniture-removals/',
    '/removals/house-removals/birmingham/': '/removals/birmingham/house-removals/',
    '/removals/house-removals/coventry/': '/removals/coventry/house-removals/',
    '/removals/house-removals/dudley/': '/removals/dudley/house-removals/',
    '/removals/house-removals/solihull/': '/removals/solihull/house-removals/',
    '/removals/house-removals/sutton-coldfield/': '/removals/sutton-coldfield/house-removals/',
    '/removals/house-removals/walsall/': '/removals/walsall/house-removals/',
    '/removals/house-removals/west-bromwich/': '/removals/west-bromwich/house-removals/',
    '/removals/house-removals/wolverhampton/': '/removals/wolverhampton/house-removals/',
    '/removals/man-and-van/birmingham/': '/removals/birmingham/man-and-van/',
    '/removals/man-and-van/coventry/': '/removals/coventry/man-and-van/',
    '/removals/man-and-van/dudley/': '/removals/dudley/man-and-van/',
    '/removals/man-and-van/solihull/': '/removals/solihull/man-and-van/',
    '/removals/man-and-van/sutton-coldfield/': '/removals/sutton-coldfield/man-and-van/',
    '/removals/man-and-van/walsall/': '/removals/walsall/man-and-van/',
    '/removals/man-and-van/west-bromwich/': '/removals/west-bromwich/man-and-van/',
    '/removals/man-and-van/wolverhampton/': '/removals/wolverhampton/man-and-van/',
    '/removals/office-removals/birmingham/': '/removals/birmingham/office-removals/',
    '/removals/office-removals/coventry/': '/removals/coventry/office-removals/',
    '/removals/office-removals/solihull/': '/removals/solihull/office-removals/',
    '/removals/packing-services/birmingham/': '/removals/birmingham/packing-services/',
    '/removals/same-day-delivery/birmingham/': '/removals/birmingham/same-day-delivery/',
    '/removals/storage/birmingham/': '/removals/birmingham/storage/',
    '/removals/student-removals/birmingham/': '/removals/birmingham/student-removals/',
    '/removals/student-moves/birmingham/': '/removals/birmingham/student-removals/',
    // Direct canonical redirects
    '/about/': '/about-us/',
    '/contact/': '/contact-us/',
    '/quote/': '/get-a-quote/',
    '/terms/': '/terms-and-conditions/',
    '/areas-we-cover/': '/areas/'
  },
  integrations: [
    mdx(),
    sitemap({
      lastmod: new Date(),
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/thank-you') &&
        !page.includes('/llms.txt') &&
        !page.includes('/robots.txt') &&
        !page.includes('/services/student-removals') &&
        !page.endsWith('/about/') &&
        !page.endsWith('/contact/') &&
        !page.endsWith('/quote/') &&
        !page.endsWith('/terms/') &&
        !page.endsWith('/areas-we-cover/'),
      serialize: (item) => {
        const url = item.url;
        item.lastmod = new Date();
        // Priority & changefreq configuration
        if (
          url === 'https://www.jimmysremovalsltd.co.uk/' ||
          url.includes('/services/house-removals/') ||
          url.includes('/services/man-and-van/') ||
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
    plugins: [
      tailwindcss(),
      {
        name: 'dev-trailing-slash-redirect',
        configureServer(server) {
          server.middlewares.stack.unshift({
            route: '',
            handle(req, res, next) {
              const rawUrl = req.url || '';
              const pathOnly = rawUrl.split('?')[0];
              // If path does not contain a file extension (.js, .css, etc.) and does not end with /
              if (pathOnly.length > 1 && !pathOnly.includes('.') && !pathOnly.endsWith('/')) {
                const query = rawUrl.includes('?') ? '?' + rawUrl.split('?')[1] : '';
                res.writeHead(301, { Location: pathOnly + '/' + query });
                res.end();
                return;
              }
              next();
            }
          });
        }
      }
    ],
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        theme: path.resolve(__dirname, './theme')
      }
    }
  }
});
