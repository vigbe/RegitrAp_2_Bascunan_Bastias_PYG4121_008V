import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesion-alumno',
  templateUrl: './sesion-alumno.page.html',
  styleUrls: ['./sesion-alumno.page.scss'],
})
export class SesionAlumnoPage implements OnInit {
  
  btnClicked(){
    alert('Ud a cerrado sesión')
  }

  constructor() { }

  ngOnInit() {
  }

}
