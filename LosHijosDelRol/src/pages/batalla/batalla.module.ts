import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Batalla } from './batalla';

@NgModule({
  declarations: [
    Batalla,
  ],
  imports: [
    IonicPageModule.forChild(Batalla),
  ],
  exports: [
    Batalla
  ]
})
export class BatallaModule {}
