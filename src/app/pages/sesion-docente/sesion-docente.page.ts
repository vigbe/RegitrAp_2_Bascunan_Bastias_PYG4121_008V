import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-docente',
  templateUrl: './sesion-docente.page.html',
  styleUrls: ['./sesion-docente.page.scss'],
})
export class SesionDocentePage implements OnInit {
    
  btnClicked(){
    alert('Ud a cerrado sesión')
  }

  constructor() { }

  ngOnInit() {
  }

}
