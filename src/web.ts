import { WebPlugin } from '@capacitor/core';

import type { ReceiptScannerPlugin } from './definitions';

export class ReceiptScannerWeb extends WebPlugin implements ReceiptScannerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
