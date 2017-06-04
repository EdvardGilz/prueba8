import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Motor } from './motor';

@NgModule({
  declarations: [
    Motor,
  ],
  imports: [
    IonicPageModule.forChild(Motor),
  ],
  exports: [
    Motor
  ]
})
export class MotorModule {}
