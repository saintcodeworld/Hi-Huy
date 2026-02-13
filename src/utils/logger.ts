import chalk from 'chalk';

/**
 * Logger utility for logging messages with different levels.
 */
class Logger {
  info(message: string): void {
    console.log(chalk.blue(`INFO: ${message}`));
  }

  warn(message: string): void {
    console.warn(chalk.yellow(`WARN: ${message}`));
  }

  error(message: string): void {
    console.error(chalk.red(`ERROR: ${message}`));
  }

  debug(message: string): void {
    console.debug(chalk.gray(`DEBUG: ${message}`));
  }
}

export const logger = new Logger();
