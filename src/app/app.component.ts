import { Component } from '@angular/core';
///Creamos la inferface
interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


//instanciamos el componente
componentes : Componente[]=[
  {
      
    icon: 'home',
    name: 'Inicio',
    redirecTo: '/home'
  },
  {

    icon: 'glasses-sharp',
    name: 'Login Alumno',
    redirecTo: '/login-alumno'
  },
  {
    icon: 'glasses-outline',
    name: 'Login Docente',
    redirecTo: '/login-docente'
  },
  {
    icon: 'card-outline',
    name: '¿Cómo usar la APP?',
    redirecTo: '/info-general'
  },   
  {
    icon: 'finger-print-sharp',
    name: 'Registrarse',
    redirecTo: '/register'
  }, 
];
}
