import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pages/login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/User/Movies/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'movie-details/:id/:idUser',
    loadChildren: () => import('./pages/User/Movies/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },
  {
    path: 'movie-details',
    loadChildren: () => import('./pages/User/Movies/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule)
  },  {
    path: 'agregar-resena',
    loadChildren: () => import('./pages/User/Resenas/agregar-resena/agregar-resena.module').then( m => m.AgregarResenaPageModule)
  },
  {
    path: 'listar-resenas',
    loadChildren: () => import('./pages/User/Resenas/listar-resenas/listar-resenas.module').then( m => m.ListarResenasPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
