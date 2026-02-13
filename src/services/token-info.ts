import { Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_NAME, MINT_ADDRESS } from '@token/config';

export class TokenInfoService {
  private connection: Connection;

  constructor(endpoint: string) {
    this.connection = new Connection(endpoint, 'confirmed');
  }

  async getTokenSupply(): Promise<number> {
    try {
      const mintPubkey = new PublicKey(MINT_ADDRESS);
      const supply = await this.connection.getTokenSupply(mintPubkey);
      return supply.value.uiAmount || 0;
    } catch (error) {
      console.error('Error fetching token supply:', error);
      throw error;
    }
  }

  async getHolderCount(): Promise<number> {
    // Placeholder logic for demonstration
    return 100;
  }

  async getTokenPrice(): Promise<number> {
    // Placeholder logic for demonstration
    return 0.5;
  }

  async getMarketCap(): Promise<number> {
    const supply = await this.getTokenSupply();
    const price = await this.getTokenPrice();
    return supply * price;
  }

  async getTopHolders(limit: number): Promise<any[]> {
    // Placeholder logic for demonstration
    return [];
  }

  formatTokenAmount(amount: number): string {
    return `${amount.toFixed(2)} ${TOKEN_NAME}`;
  }
}
