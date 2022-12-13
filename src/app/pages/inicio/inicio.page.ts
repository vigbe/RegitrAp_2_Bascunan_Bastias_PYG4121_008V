import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'leaf-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'bookmark-outline',
      name: 'Articulos',
      redirecTo: '/articulo'
    },
    {
      icon: 'newspaper-outline',
      name: 'Registrarte',
      redirecTo: '/formulario'
    },
  ];

  constructor(
    private menuController: MenuController, 
    private route: Router
    ) { }

    public name: string;
  
  nextpage() {
    this.route.navigate(['/qr']);
  }

  nextpage2() {
    this.route.navigate(['/inicio']);
  }

  ngOnInit() {
    this.name=localStorage.getItem('name');
  }

  mostrarMenu() {
    this.menuController.open('first');
  }


}
