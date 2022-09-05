import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(  private menuController: MenuController    ) { }

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
