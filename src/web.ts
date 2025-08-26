import { WebPlugin } from '@capacitor/core';

import type { ReceiptScannerPlugin, ScanReceiptOptions, ScanReceiptResponse } from './definitions';

export class ReceiptScannerWeb extends WebPlugin implements ReceiptScannerPlugin {
  async scan(options: ScanReceiptOptions): Promise<ScanReceiptResponse> {
    console.log('scan', options);
    throw this.unimplemented('Not implemented on web.');
  }
}
