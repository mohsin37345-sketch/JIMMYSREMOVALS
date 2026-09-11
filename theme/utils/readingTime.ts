/**
 * Computes reading time and word count for a given text body.
 */
export function readingTime(text: string): { minutes: number; text: string; words: number } {
  const clean = text.replace(/<[^>]*>/g, '').trim();
  const words = clean ? clean.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return {
    minutes,
    text: `${minutes} min read`,
    words
  };
}
