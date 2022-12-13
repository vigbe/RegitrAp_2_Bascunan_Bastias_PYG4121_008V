import { Component } from '@angular/core';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'leaf-outline',
      name: 'Menú',
      redirecTo: '/inicio'
    },
    {
      icon: 'bookmark-outline',
      name: 'Sobre nosotros',
      redirecTo: '/articulo'
    },
    {
      icon: 'newspaper-outline',
      name: 'Feriado',
      redirecTo: '/noticia'
    },
    {
      icon: 'ear-outline',
      name: 'Justificaciones',
      redirecTo: '/datos'
    },
    
 
  ];

  salir(){
    return localStorage.clear();
 }

}
