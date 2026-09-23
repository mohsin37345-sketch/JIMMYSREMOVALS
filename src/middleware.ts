import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  // If request has no trailing slash and no file extension (e.g. .css, .js, .webp)
  if (pathname.length > 1 && !pathname.endsWith('/') && !pathname.includes('.')) {
    return context.redirect(`${pathname}/${context.url.search}`, 301);
  }
  return next();
});
