import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonText, IonIcon, IonSpinner, IonToast } from '@ionic/angular/standalone';
import { ReceiptScanner, ResponseType, ScanReceiptResponse, ScanReceiptResponseStatus } from 'capacitor-plugin-receipt-scanner';
import { addIcons } from 'ionicons';
import { camera, document, checkmarkCircle, closeCircle, refresh } from 'ionicons/icons';
import { Capacitor } from '@capacitor/core';

interface ScanResult extends ScanReceiptResponse {
  timestamp: Date;
  responseType: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, DatePipe, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonText, IonIcon, IonSpinner, IonToast],
})
export class HomePage {
  scanResult: ScanResult | null = null;
  isScanning = false;
  showToast = false;
  toastMessage = '';

  constructor() {
    addIcons({ camera, document, checkmarkCircle, closeCircle, refresh });
  }

  async scanWithAutoCapture() {
    this.isScanning = true;
    try {
      const result = await ReceiptScanner.scan({
        responseType: ResponseType.Base64
      });
      console.log('Auto-capture result:', result);
      this.handleScanResult(result, 'Base64');
    } catch (error) {
      console.error('Auto-capture scan error:', error);
      this.showToastMessage('Auto-capture scan failed: ' + (error as Error).message);
    } finally {
      this.isScanning = false;
    }
  }

  private handleScanResult(result: ScanReceiptResponse, responseType: string) {
    this.scanResult = {
      ...result,
      timestamp: new Date(),
      responseType: responseType
    };

    if (result.status === 'success') {
      this.showToastMessage('Document scanned successfully!');
    } else if (result.status === ScanReceiptResponseStatus.Cancel) {
      this.showToastMessage('Scan cancelled');
    } else {
      this.showToastMessage('Scan completed with status: ' + result.status);
    }
  }

  private showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
  }

  clearResult() {
    this.scanResult = null;
  }

  getImageSrc(): string {
    if (!this.scanResult?.scannedFile) {
      return '';
    }

    if (this.scanResult.responseType === 'Base64') {
      return `data:image/jpeg;base64,${this.scanResult.scannedFile}`;
    } else {
      // For file paths, handle different platforms
      if (Capacitor.isNativePlatform()) {
        // On native platforms, convert file:// URLs to web-accessible URLs
        const filePath = this.scanResult.scannedFile;
        if (filePath.startsWith('file://')) {
          // Convert to Capacitor web accessible URL
          return Capacitor.convertFileSrc(filePath);
        }
        return filePath;
      } else {
        // On web, return the path directly
        return this.scanResult.scannedFile;
      }
    }
  }

  getStatusIcon(): string {
    switch (this.scanResult?.status) {
      case ScanReceiptResponseStatus.Success: return 'checkmark-circle';
      case ScanReceiptResponseStatus.Cancel: return 'close-circle';
      default: return 'document';
    }
  }

  getStatusColor(): string {
    switch (this.scanResult?.status) {
      case ScanReceiptResponseStatus.Success: return 'success';
      case ScanReceiptResponseStatus.Cancel: return 'warning';
      default: return 'medium';
    }
  }
}
