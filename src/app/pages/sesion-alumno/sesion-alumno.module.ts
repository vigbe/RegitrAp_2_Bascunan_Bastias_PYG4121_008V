import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionAlumnoPageRoutingModule } from './sesion-alumno-routing.module';

import { SesionAlumnoPage } from './sesion-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionAlumnoPageRoutingModule
  ],
  declarations: [SesionAlumnoPage]
})
export class SesionAlumnoPageModule {}
