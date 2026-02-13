import { describe, it, expect } from 'vitest';
import { TokenMetadata } from '@token/metadata';

describe('TokenMetadata Class Tests', () => {
  it('should build token metadata successfully', () => {
    const metadata = new TokenMetadata()
      .setName('Hi Huy')
      .setSymbol('$HI HUY TOK')
      .setDescription('token is Huy Hiu')
      .setImage('https://example.com/image.png')
      .setExternalUrl('https://example.com')
      .build();
    expect(metadata.toJSON()).toEqual({
      name: 'Hi Huy',
      symbol: '$HI HUY TOK',
      description: 'token is Huy Hiu',
      image: 'https://example.com/image.png',
      externalUrl: 'https://example.com',
    });
  });

  it('should validate token metadata', () => {
    const metadata = new TokenMetadata()
      .setName('Hi Huy')
      .setSymbol('$HI HUY TOK')
      .build();
    expect(() => metadata.validate()).not.toThrow();
  });

  it('should throw error if metadata is invalid', () => {
    const metadata = new TokenMetadata();
    expect(() => metadata.build()).toThrow('Token name and symbol are required.');
  });

  it('should allow chaining of setters', () => {
    const metadata = new TokenMetadata();
    expect(metadata.setName('Hi Huy').setSymbol('$HI HUY TOK')).toBe(metadata);
  });

  it('should serialize metadata to JSON', () => {
    const metadata = new TokenMetadata().setName('Hi Huy').setSymbol('$HI HUY TOK');
    expect(metadata.toJSON()).toHaveProperty('name', 'Hi Huy');
  });

  it('should handle missing optional fields', () => {
    const metadata = new TokenMetadata().setName('Hi Huy').setSymbol('$HI HUY TOK');
    expect(metadata.toJSON()).toEqual({
      name: 'Hi Huy',
      symbol: '$HI HUY TOK',
      description: undefined,
      image: undefined,
      externalUrl: undefined
    });
  });
});
