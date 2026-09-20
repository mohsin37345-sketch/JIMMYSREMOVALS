import type { APIRoute } from 'astro';
import { siteConfig } from 'src/data/site';

export const GET: APIRoute = () => {
  return new Response(null, {
    status: 301,
    headers: {
      Location: `${siteConfig.siteUrl}/sitemap-index.xml`,
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
