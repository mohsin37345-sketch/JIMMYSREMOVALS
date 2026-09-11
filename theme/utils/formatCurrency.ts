/**
 * Formats a number into GBP currency format (£X.XX or £X depending on fraction digits).
 */
export function formatCurrency(amount: number, includePence = false): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: includePence ? 2 : 0,
    maximumFractionDigits: includePence ? 2 : 0
  }).format(amount);
}
