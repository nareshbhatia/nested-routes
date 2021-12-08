/**
 * Example: formatDate('2021-07-09T14:00:00.000Z') => '07/09/2021'
 * @param dateStr
 * @returns formatted date string
 */
export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}
