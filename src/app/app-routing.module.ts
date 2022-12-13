import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresarGuard } from './ingresar.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[IngresarGuard]
  },
  {
    path: 'articulo',
    loadChildren: () => import('./pages/articulo/articulo.module').then( m => m.ArticuloPageModule),
    canActivate:[IngresarGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./index/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'create',
    loadChildren: () => import('./index/create/create.module').then( m => m.CreatePageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index/index.module').then( m => m.IndexPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'noticia',
    loadChildren: () => import('./pages/noticia/noticia.module').then( m => m.NoticiaPageModule),
    canActivate:[IngresarGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule),
    canActivate:[IngresarGuard]
  },
  {
    path: 'inicio2',
    loadChildren: () => import('./pages/inicio2/inicio2.module').then( m => m.Inicio2PageModule),
    canActivate:[IngresarGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),
    canActivate:[IngresarGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
