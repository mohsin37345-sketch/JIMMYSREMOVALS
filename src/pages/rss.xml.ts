import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from 'src/data/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  let posts: any[] = [];
  try {
    posts = await getCollection('blog', ({ data }) => !data.draft);
  } catch (e) {
    posts = [];
  }

  return rss({
    title: `${siteConfig.businessName} - Moving Advice & Guides`,
    description: 'Expert moving tips, packing guides, and West Midlands removals advice.',
    site: context.site || siteConfig.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: typeof post.data.date === 'string' ? new Date(post.data.date) : post.data.date,
      description: post.data.description,
      link: `/blog/${post.id || post.slug}/`
    })),
    customData: `<language>en-GB</language>`
  });
};
