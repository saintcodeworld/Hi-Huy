/**
 * Format the amount in SOL.
 * @param amount - The amount in lamports to format.
 */
export function formatSOL(amount: number): string {
  return (amount / 1e9).toFixed(2) + ' SOL';
}

/**
 * Format the amount in lamports.
 * @param amount - The amount to format.
 */
export function formatLamports(amount: number): string {
  return amount.toLocaleString() + ' lamports';
}

/**
 * Shorten a Solana address.
 * @param address - The address to shorten.
 */
export function shortenAddress(address: string): string {
  return address.slice(0, 4) + '...' + address.slice(-4);
}

/**
 * Format the market cap value.
 * @param cap - The market cap value to format.
 */
export function formatMarketCap(cap: number): string {
  return '$' + cap.toFixed(2) + 'M';
}

/**
 * Format the percent change value.
 * @param change - The percent change value to format.
 */
export function formatPercentChange(change: number): string {
  return change.toFixed(2) + '%';
}

/**
 * Format a timestamp to a readable date.
 * @param timestamp - The timestamp to format.
 */
export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

/**
 * Format a number with commas.
 * @param number - The number to format.
 */
export function formatNumber(number: number): string {
  return number.toLocaleString();
}
