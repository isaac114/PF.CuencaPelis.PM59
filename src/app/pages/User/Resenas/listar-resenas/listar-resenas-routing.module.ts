import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarResenasPage } from './listar-resenas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarResenasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarResenasPageRoutingModule {}
