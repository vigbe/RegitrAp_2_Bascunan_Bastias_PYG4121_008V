import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnDestroy, OnInit {

  myIonicQR = "Aca debe ir fecha y ramo"
  scanedResult: any;
  content_visibility = 'hidden';

  constructor(
 
    private route: Router
  ) { }


  nextpage2() {
    this.route.navigate(['/inicio']);
  }
  ngOnInit() { }
  async checkPermission(){
    try {
      //ver si los permisos estan activados
      const status = await BarcodeScanner.checkPermission({ force:true });
      if (status.granted){
      //el usuario otorgó los permisos
      return true;
      }
      return false;
    } catch(e){
      console.log(e)
    
    }
  }


  async starScan() {
    try {const permision = await this.checkPermission();
      if(!permision){
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      this.content_visibility = 'hidden';
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.add('scanner-active');
      if (result?.hasContent){
        this.scanedResult = result.content;
        BarcodeScanner.showBackground();
        document.querySelector('body').classList.add('scanner-active');
        console.log(this.scanedResult);
      }
    } catch(e){
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.add('scanner-active');
  }

  ngOnDestroy(): void {
    this.stopScan();
  }
}
