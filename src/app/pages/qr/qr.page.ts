import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  qrCodeString ="";
  scannedResult: any;
  constructor(private menuController: MenuController) { }
  lista={
    asignatura:'',
    fecha:'',
  }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  GenerarQr(){
    this.qrCodeString=this.lista.asignatura+'\n'
    +this.lista.fecha;
  }
  verQr(){
    this.scannedResult=this.qrCodeString;


  }
}
