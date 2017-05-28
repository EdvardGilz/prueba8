import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HistoriasDataModel } from '../../models/models';

import { Historia } from '../historia/historia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public historias: HistoriasDataModel[] = [{"id": 1, "nombre": "Un clásico comienzo"}, 
                                           {"id": 2, "nombre": "Historia 2"}, 
                                           {"id": 3, "nombre": "Historia 3"}, 
                                           {"id": 4, "nombre": "Historia 4"}, 
                                           {"id": 5, "nombre": "Historia 5"}, 
                                           {"id": 6, "nombre": "Historia 6"}, 
                                           {"id": 7, "nombre": "Historia 7"}, 
                                           {"id": 8, "nombre": "Historia 8"}, 
                                           {"id": 9, "nombre": "Historia 9"}, 
                                           {"id": 10, "nombre": "Historia 10"}];

  constructor(public navCtrl: NavController) {
  }

  ir(historia) {
    this.navCtrl.push(Historia, {"data": historia});
  }

}
