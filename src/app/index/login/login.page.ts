import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController ) {
    this.formularioLogin =this.fb.group({
      'Alias':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    })
   }
  

  ngOnInit() {
  }
  async ingresar(){
    var f=this.formularioLogin.value;

    var usuario =JSON.parse(localStorage.getItem('usuario'));

    if(usuario.Alias == f.Alias && usuario.password ==  f.password && usuario.tipoDeUsuario == 'f' ){
      console.log('ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio');
    }
    else if(usuario.Alias == f.Alias && usuario.password ==  f.password && usuario.tipoDeUsuario == 'm')
    {
      console.log('ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio2');
    }
    else
    {
      const alert = await this.alertController.create({
        header:'Datos incorrectos',
        message: 'Losß datos que ingresaste, no son correctos',
        buttons:['Aceptar']
      })
      await alert.present();
      return;
    }
  }
}
