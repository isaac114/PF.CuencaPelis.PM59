import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerComentarResenaPage } from './ver-comentar-resena.page';

const routes: Routes = [
  {
    path: '',
    component: VerComentarResenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerComentarResenaPageRoutingModule {}
