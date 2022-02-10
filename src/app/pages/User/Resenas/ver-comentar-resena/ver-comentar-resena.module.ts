import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerComentarResenaPageRoutingModule } from './ver-comentar-resena-routing.module';

import { VerComentarResenaPage } from './ver-comentar-resena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerComentarResenaPageRoutingModule
  ],
  declarations: [VerComentarResenaPage]
})
export class VerComentarResenaPageModule {}
