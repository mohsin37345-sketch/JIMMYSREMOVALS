import type { APIRoute } from 'astro';
import { siteConfig } from 'src/data/site';

export const GET: APIRoute = () => {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /404/
Disallow: /thank-you/
Disallow: /*?utm_*

Sitemap: ${siteConfig.siteUrl}/sitemap-index.xml
Sitemap: ${siteConfig.siteUrl}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
