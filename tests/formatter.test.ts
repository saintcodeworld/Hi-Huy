import { describe, it, expect } from 'vitest';
import { formatSOL, formatLamports, shortenAddress, formatMarketCap, formatPercentChange, formatTimestamp, formatNumber } from '@utils/formatter';

describe('Formatter Utility Tests', () => {
  it('should format SOL amount correctly', () => {
    expect(formatSOL(1000000000)).toBe('1.00 SOL');
  });

  it('should format lamports correctly', () => {
    expect(formatLamports(1000000)).toBe('1,000,000 lamports');
  });

  it('should shorten Solana address correctly', () => {
    expect(shortenAddress('HCBqJDAcAMHP8bYCF6ds3KcvfSkQJnRVCcmdUEvmd6Cx')).toBe('HCBq...6Cx');
  });

  it('should format market cap correctly', () => {
    expect(formatMarketCap(1000000)).toBe('$1000000.00M');
  });

  it('should format percent change correctly', () => {
    expect(formatPercentChange(-5.23)).toBe('-5.23%');
  });

  it('should format timestamp correctly', () => {
    const timestamp = 1638316800000;
    expect(formatTimestamp(timestamp)).toBe(new Date(timestamp).toLocaleString());
  });

  it('should format number with commas', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('should handle zero SOL amount', () => {
    expect(formatSOL(0)).toBe('0.00 SOL');
  });
});
