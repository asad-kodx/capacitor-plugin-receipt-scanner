export interface ReceiptScannerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
