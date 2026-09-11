/**
 * Formats a Date object or ISO string into UK English standard format: DD MMMM YYYY (e.g. 10 June 2026)
 */
export function formatDate(date: Date | string | number): string {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  if (isNaN(d.getTime())) {
    return '';
  }
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(d);
}

/**
 * Returns an ISO 8601 string suitable for <time datetime="..."> attributes.
 */
export function formatIsoDate(date: Date | string | number): string {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  if (isNaN(d.getTime())) {
    return '';
  }
  return d.toISOString().split('T')[0] ?? '';
}
