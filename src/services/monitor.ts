import { EventEmitter } from 'events';

export class TokenMonitor extends EventEmitter {
  private intervalId: NodeJS.Timeout | null = null;
  private pollingInterval: number;

  constructor(pollingInterval: number = 60000) {
    super();
    this.pollingInterval = pollingInterval;
  }

  start(): void {
    if (this.intervalId) return;
    this.intervalId = setInterval(() => {
      this.emit('update', { time: Date.now() });
    }, this.pollingInterval);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  onPriceChange(callback: (data: any) => void): void {
    this.on('priceChange', callback);
  }

  onNewHolder(callback: (data: any) => void): void {
    this.on('newHolder', callback);
  }

  getStatus(): string {
    return this.intervalId ? 'Running' : 'Stopped';
  }
}
