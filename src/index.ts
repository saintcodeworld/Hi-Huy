import { TokenMetadata } from '@token/metadata';
import { TOKEN_NAME, TOKEN_SYMBOL, MINT_ADDRESS, DEX_LINKS } from '@token/config';
import { logger } from '@utils/logger';

function printBanner(): void {
  logger.info(`Token Name: ${TOKEN_NAME}`);
  logger.info(`Token Symbol: ${TOKEN_SYMBOL}`);
  logger.info(`Mint Address: ${MINT_ADDRESS}`);
  logger.info('DEX Links:');
  Object.entries(DEX_LINKS).forEach(([key, url]) => {
    logger.info(`${key}: ${url}`);
  });
}

if (require.main === module) {
  printBanner();
}

export { TokenMetadata };
