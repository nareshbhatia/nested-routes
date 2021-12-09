/**
 * Returns a display string for the specified amount in the given currency.
 * @param {number} amount
 * @param {string} currency, e.g. 'USD'
 * @param {string} locale (defaults to 'en-US')
 * @returns {string}
 */
export function formatMoney(
  amount: number,
  currency: string,
  locale: string = 'en-US'
) {
  return amount.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  });
}
