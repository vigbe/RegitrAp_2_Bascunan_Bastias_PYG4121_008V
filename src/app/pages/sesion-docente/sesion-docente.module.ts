import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SesionDocentePageRoutingModule } from './sesion-docente-routing.module';

import { SesionDocentePage } from './sesion-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SesionDocentePageRoutingModule
  ],
  declarations: [SesionDocentePage]
})
export class SesionDocentePageModule {}
