import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Motor } from '../motor/motor';

/**
 * Generated class for the Batalla page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-batalla',
  templateUrl: 'batalla.html',
})
export class Batalla {

  constructor(public navCtrl: NavController) {
  }

  batalla() {
    this.navCtrl.push(Motor);
  }
 
}
