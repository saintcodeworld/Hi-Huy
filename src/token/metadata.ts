export class TokenMetadata {
  private name: string;
  private symbol: string;
  private description: string;
  private image: string;
  private externalUrl: string;

  /**
   * Set the name of the token.
   * @param name - The name of the token.
   */
  setName(name: string): TokenMetadata {
    this.name = name;
    return this;
  }

  /**
   * Set the symbol of the token.
   * @param symbol - The symbol of the token.
   */
  setSymbol(symbol: string): TokenMetadata {
    this.symbol = symbol;
    return this;
  }

  /**
   * Set the description of the token.
   * @param description - The description of the token.
   */
  setDescription(description: string): TokenMetadata {
    this.description = description;
    return this;
  }

  /**
   * Set the image URL of the token.
   * @param image - The image URL of the token.
   */
  setImage(image: string): TokenMetadata {
    this.image = image;
    return this;
  }

  /**
   * Set the external URL of the token.
   * @param url - The external URL of the token.
   */
  setExternalUrl(url: string): TokenMetadata {
    this.externalUrl = url;
    return this;
  }

  /**
   * Build the token metadata.
   */
  build(): TokenMetadata {
    this.validate();
    return this;
  }

  /**
   * Validate the token metadata.
   */
  validate(): void {
    if (!this.name || !this.symbol) {
      throw new Error('Token name and symbol are required.');
    }
    // Additional validations can be added here
  }

  /**
   * Convert the token metadata to JSON.
   */
  toJSON(): object {
    return {
      name: this.name,
      symbol: this.symbol,
      description: this.description,
      image: this.image,
      externalUrl: this.externalUrl,
    };
  }
}
