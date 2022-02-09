import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarResenasPageRoutingModule } from './listar-resenas-routing.module';

import { ListarResenasPage } from './listar-resenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarResenasPageRoutingModule
  ],
  declarations: [ListarResenasPage]
})
export class ListarResenasPageModule {}
