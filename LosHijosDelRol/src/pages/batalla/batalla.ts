import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';
import { NativeAudio } from '@ionic-native/native-audio';

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
  public tiempo;
  public imagen = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private shake: Shake,
              private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadComplex('dado', 'assets/dado/efect.mp3', 1, 1, 0);
    const watch = shake.startWatch(20).subscribe(() => {
      this.nativeAudio.play('dado');
      this.imagen = "assets/dado/dado.gif"
      clearTimeout(this.tiempo);
      this.tiempo = setTimeout(() => {
        watch.unsubscribe();
        this.verificar();
      }, 3000);
    });
  }

  verificar() {
    var numero = Math.floor((Math.random() * 6) + 1);
    switch (numero) {
      case 1:
        this.imagen = "assets/dado/dado1.gif"
        break;
      case 2:
        this.imagen = "assets/dado/dado2.gif"
        break;
      case 3:
        this.imagen = "assets/dado/dado3.gif"
        break;
      case 4:
        this.imagen = "assets/dado/dado4.gif"
        break;
      case 5:
        this.imagen = "assets/dado/dado5.gif"
        break;
      case 6:
        this.imagen = "assets/dado/dado6.gif"
        break;
    
      default:
        break;
    }

    this.nativeAudio.stop('dado');
  }
 
}
