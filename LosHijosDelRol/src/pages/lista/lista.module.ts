import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Lista } from './lista';

@NgModule({
  declarations: [
    Lista,
  ],
  imports: [
    IonicPageModule.forChild(Lista),
  ],
  exports: [
    Lista
  ]
})
export class ListaModule {}
