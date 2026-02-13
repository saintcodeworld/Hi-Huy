/**
 * Validate if the input is a valid Solana address.
 * @param address - The Solana address to validate.
 */
export function isValidSolanaAddress(address: string): boolean {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
}

/**
 * Validate if the input is a valid token amount.
 * @param amount - The token amount to validate.
 */
export function isValidTokenAmount(amount: number): boolean {
  return amount > 0;
}

/**
 * Validate the token metadata.
 * @param metadata - The metadata object to validate.
 */
export function validateTokenMetadata(metadata: any): boolean {
  return !!metadata.name && !!metadata.symbol;
}

/**
 * Sanitize input by escaping special characters.
 * @param input - The input string to sanitize.
 */
export function sanitizeInput(input: string): string {
  return input.replace(/[&<>'"/]/g, '');
}

/**
 * Validate if the input is a valid URL.
 * @param url - The URL to validate.
 */
export function isValidUrl(url: string): boolean {
  return /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(url);
}
