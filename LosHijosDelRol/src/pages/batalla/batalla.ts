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
      this.imagen = "assets/dado/d20.gif"
      clearTimeout(this.tiempo);
      this.tiempo = setTimeout(() => {
        watch.unsubscribe();
        this.verificar();
      }, 3000);
    });
  }

  verificar() {
    var numero = Math.floor((Math.random() * 20) + 1);
    switch (numero) {
      case 1:
        this.imagen = "assets/dado/d20-1.gif"
        break;
      case 2:
        this.imagen = "assets/dado/d20-2.gif"
        break;
      case 3:
        this.imagen = "assets/dado/d20-3.gif"
        break;
      case 4:
        this.imagen = "assets/dado/d20-4.gif"
        break;
      case 5:
        this.imagen = "assets/dado/d20-5.gif"
        break;
      case 6:
        this.imagen = "assets/dado/d20-6.gif"
        break;
      case 7:
        this.imagen = "assets/dado/d20-7.gif"
        break;
      case 8:
        this.imagen = "assets/dado/d20-8.gif"
        break;
      case 9:
        this.imagen = "assets/dado/d20-9.gif"
        break;
      case 10:
        this.imagen = "assets/dado/d20-10.gif"
        break;
      case 11:
        this.imagen = "assets/dado/d20-11.gif"
        break;
      case 12:
        this.imagen = "assets/dado/d20-12.gif"
        break;
      case 13:
        this.imagen = "assets/dado/d20-13.gif"
        break;
      case 14:
        this.imagen = "assets/dado/d20-14.gif"
        break;
      case 15:
        this.imagen = "assets/dado/d20-15.gif"
        break;
      case 16:
        this.imagen = "assets/dado/d20-16.gif"
        break;
      case 17:
        this.imagen = "assets/dado/d20-17.gif"
        break;
      case 18:
        this.imagen = "assets/dado/d20-18.gif"
        break;
      case 19:
        this.imagen = "assets/dado/d20-19.gif"
        break;
      case 20:
        this.imagen = "assets/dado/d20-20.gif"
        break;
    
      default:
        break;
    }

    this.nativeAudio.stop('dado');
  }
 
}
