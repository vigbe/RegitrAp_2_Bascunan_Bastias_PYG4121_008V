import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  ///quitamos el path por defecto
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  //verificamos que los path contengan todas las paginas
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./pages/login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule)
  },
  {
    path: 'login-docente',
    loadChildren: () => import('./pages/login-docente/login-docente.module').then( m => m.LoginDocentePageModule)
  },
  {
    path: 'info-general',
    loadChildren: () => import('./pages/login-info/login-info.module').then( m => m.LoginInfoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sesion-alumno',
    loadChildren: () => import('./pages/sesion-alumno/sesion-alumno.module').then( m => m.SesionAlumnoPageModule)
  },
  {
    path: 'sesion-docente',
    loadChildren: () => import('./pages/sesion-docente/sesion-docente.module').then( m => m.SesionDocentePageModule)
  },
  {
    path: 'recuperar-contrasenna',
    loadChildren: () => import('./pages/recuperar-contrasenna/recuperar-contrasenna.module').then( m => m.RecuperarContrasennaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
