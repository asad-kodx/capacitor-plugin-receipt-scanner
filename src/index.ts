import { registerPlugin } from '@capacitor/core';

import type { ReceiptScannerPlugin } from './definitions';

const ReceiptScanner = registerPlugin<ReceiptScannerPlugin>('ReceiptScanner', {
  web: () => import('./web').then((m) => new m.ReceiptScannerWeb()),
});

export * from './definitions';
export { ReceiptScanner };
