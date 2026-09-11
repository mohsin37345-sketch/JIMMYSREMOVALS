/**
 * Generates an absolute, canonical WWW URL with a trailing slash.
 */
export const SITE_URL = 'https://www.jimmysremovalsltd.co.uk';

export function absoluteUrl(pathname = '/'): string {
  // Strip leading and trailing slashes, remove any duplicate slashes
  let cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  if (cleanPath.length > 0) {
    // Preserve file extensions like robots.txt, sitemap-index.xml, llms.txt, etc.
    if (/\.[a-zA-Z0-9]+$/.test(cleanPath)) {
      return `${SITE_URL}/${cleanPath}`;
    }
    return `${SITE_URL}/${cleanPath}/`;
  }
  return `${SITE_URL}/`;
}
