import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-recuperar-contrasenna',
  templateUrl: './recuperar-contrasenna.page.html',
  styleUrls: ['./recuperar-contrasenna.page.scss'],
})
export class RecuperarContrasennaPage implements OnInit {


  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  usuario = {
    nombre:'',
    email: '',
    first_password:'',
    password:''
    
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}