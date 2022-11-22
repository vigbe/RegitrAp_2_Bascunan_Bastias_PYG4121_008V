import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  

  formularioRegistro: FormGroup;

  constructor(private fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro=this.fb.group({
      'name':new FormControl ("",Validators.required),
      'Alias':new FormControl ("",Validators.required),
      'tipoDeUsuario':new FormControl ("",Validators.required),
      'email':new FormControl ("",Validators.required),
      'password':new FormControl ("",Validators.required)
    });
   }

  ngOnInit() {
  }

   async guardar(){
      var f =this.formularioRegistro.value;

      if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header:'Datos incompletos',
          message: 'Tienes que llenar todos los datos',
          buttons:['Aceptar']
        })
        await alert.present();
      }
      var usuario ={
        name: f.name,
        Alias: f.Alias,
        tipoDeUsuario: f.tipoDeUsuario,
        email: f.email,
        password: f.password
      }
      localStorage.setItem('usuario',JSON.stringify(usuario));
      
      const alert = await this.alertController.create({
        header:'Datos Completados',
        message: 'Se ha Registrado correspondientemente',
        buttons :['ok']
        
      });
      this.navCtrl.navigateRoot('index')
      await alert.present();     
    }

  }
