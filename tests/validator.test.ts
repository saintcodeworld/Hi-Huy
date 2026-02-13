import { describe, it, expect } from 'vitest';
import { isValidSolanaAddress, isValidTokenAmount, validateTokenMetadata, sanitizeInput, isValidUrl } from '@utils/validator';

describe('Validator Utility Tests', () => {
  it('should validate valid Solana address', () => {
    expect(isValidSolanaAddress('HCBqJDAcAMHP8bYCF6ds3KcvfSkQJnRVCcmdUEvmd6Cx')).toBe(true);
  });

  it('should invalidate invalid Solana address', () => {
    expect(isValidSolanaAddress('InvalidAddress')).toBe(false);
  });

  it('should validate positive token amount', () => {
    expect(isValidTokenAmount(100)).toBe(true);
  });

  it('should invalidate non-positive token amount', () => {
    expect(isValidTokenAmount(-10)).toBe(false);
  });

  it('should validate token metadata', () => {
    expect(validateTokenMetadata({ name: 'Hi Huy', symbol: '$HI HUY TOK' })).toBe(true);
  });

  it('should sanitize input', () => {
    expect(sanitizeInput('<script>alert(1)</script>')).toBe('scriptalert(1)/script');
  });

  it('should validate valid URL', () => {
    expect(isValidUrl('https://solana.com')).toBe(true);
  });

  it('should invalidate invalid URL', () => {
    expect(isValidUrl('htp://invalid.com')).toBe(false);
  });
});
