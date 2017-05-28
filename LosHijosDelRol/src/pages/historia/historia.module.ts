import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Historia } from './historia';

@NgModule({
  declarations: [
    Historia,
  ],
  imports: [
    IonicPageModule.forChild(Historia),
  ],
  exports: [
    Historia
  ]
})
export class HistoriaModule {}
