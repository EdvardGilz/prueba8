import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';
import { NativeAudio } from '@ionic-native/native-audio';

import { BatallaDataModel } from '../../models/models';

/**
 * Generated class for the Motor page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-motor',
  templateUrl: 'motor.html',
})
export class Motor {
  public tiempo;
  public imagen = "assets/dado/d20-1.gif";
  public historial: BatallaDataModel[] = [];
  public jugador = 0;
  public mensaje = 0;
  public sangreJ1 = 20;
  public sangreJ2 = 20;
  public mensajeRes = "";
  public mensajeResFinal;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private shake: Shake,
              private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadComplex('dado', 'assets/dado/efect.mp3', 1, 1, 0);
  }

  accion(tipo) {
    this.mensaje = 1;
    
    if (this.jugador == 0) {
      this.agitar(tipo);
    }
    else {
      this.tiempo = setTimeout(() => {
        this.agitarVR(tipo);
      }, 3000);
    }
  }

  agitar(tipo) {
    const watch = this.shake.startWatch(20).subscribe(() => {
      this.nativeAudio.play('dado');
      this.imagen = "assets/dado/d20.gif"
      clearTimeout(this.tiempo);
      this.tiempo = setTimeout(() => {
        watch.unsubscribe();
        this.verificar(tipo);
      }, 3000);
    });
  }

  agitarVR(tipo) {
    this.nativeAudio.play('dado');
    this.imagen = "assets/dado/d20.gif"
    this.tiempo = setTimeout(() => {
      this.verificar(tipo);
    }, 3000);
  }

  verificar(tipo) {
    this.mensaje = 0;
    var numero = Math.floor((Math.random() * 20) + 1);
    var accion;

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
    
    if (tipo == 1) {
      accion = "ataque";
    }
    else if (tipo == 2) {
      accion = "defensa";
    }

    this.historial.push({"valor": numero, "accion": accion, "accionVal": tipo, "imagen": this.imagen, "jugador": this.jugador});
    
    if (this.jugador == 0) {
      this.jugador = 1;
      this.accion(Math.floor((Math.random() * 2) + 1));
    }
    else {
      var longitud = this.historial.length;
      var j1 = this.historial[longitud-2];
      var j2 = this.historial[longitud-1];

      if (j1.accionVal == 1) { // ATACO
        if (j1.valor == 20) { // GOLPE MORTAL
          if (j2.accionVal == 2) { // GOLPE MORTAL + ENEMIGO DEFENDIO
            if (j2.valor == 20) { // GOLPE MORTAL + DEFENSA MORTAL
              this.mensajeRes = "Tu golpe fue mortal, pero su defensa es impenetrable";
            }
            else { // GOLPE MORTAL + DEFENSA NORMAL
              // CALCULO
              var resta = j1.valor - j2.valor;
              this.sangreJ2 -= resta;
              if (this.sangreJ2 <= 0) { // EL ENEMIGO MUERE
                this.mensajeRes = "Acabas con tu enemigo gracias a ese golpe mortal";
                /** GANAS */
                this.mensajeResFinal = "GANASTE!!";
                this.jugador = 3;
              }
              else { // EL ENEMIGO NO MUERE
                this.mensajeRes = "Lanzas un golpe mortal, pero no es suficiente, ¡sigue vivo!";
              }
            }
          }
          else { // GOLPE MORTAL + ENEMIGO ATACO
            if (j2.valor == 20) { // GOLPE MORTAL + GOLPE MORTAL
              this.mensajeRes = "La fuerza de tu golpe es inmensurable, lamentablemente también la de tu enemigo, ambos mueren al instante";
              /** TODOS MUERTOS */
              this.mensajeResFinal = "AMBOS MUEREN!!";
              this.jugador = 3;
            }
            else { // GOLPE MORTAL + GOLPE NORMAL
              this.mensajeRes = "Lanzas un golpe mortal, tu enemigo no puede hacer nada";
              /** GANAS */
              this.mensajeResFinal = "GANASTE!!";
              this.jugador = 3;
            }
          }
        }
        else { // GOLPE NORMAL
          if (j2.accionVal == 2) { // GOLPE NORMAL + ENEMIGO DEFENDIO
            if (j2.valor == 20) { // GOLPE NORMAL + DEFENSA MORTAL
              this.mensajeRes = "La defensa de tu enemigo es impenetrable, no logras hacerle ni un rasguño";
            }
            else { // GOLPE NORMAL + DEFENSA NORMAL
              // CALCULO
              if (j1.valor <= j2.valor) { // SIN EFECTO
                this.mensajeRes = "Tu golpe no es lo suficientemente fuerte como para dañar al enemigo";
              }
              else {
                var resta = j1.valor - j2.valor;
                this.sangreJ2 -= resta;
                if (this.sangreJ2 <= 0) { // EL ENEMIGO MUERE
                  this.mensajeRes = "Logras acabar con tu enemigo";
                  /** GANAS */
                  this.mensajeResFinal = "GANASTE!!";
                  this.jugador = 3;
                }
                else { // EL ENEMIGO NO MUERE
                  this.mensajeRes = "Tu enemigo aún tiene energia para un round más";
                }
              }
            }
          }
          else { // GOLPE NORMAL + ENEMIGO ATACO
            if (j2.valor == 20) { // GOLPE NORMAL + GOLPE MORTAL
              this.mensajeRes = "Ese golpe fue demasiado para ti, mueres al instante";
              /** PIERDES */
              this.mensajeResFinal = "PERDISTE!!";
              this.jugador = 3;
            }
            else { // GOLPE NORMAL + GOLPE NORMAL
              // CALCULO
              this.sangreJ2 -= j1.valor;
              if (this.sangreJ2 <= 0) { // EL ENEMIGO MUERE
                this.mensajeRes = "Tu enemigo no pudo con tu habilidad y muere";
                /** GANAS */
                this.mensajeResFinal = "GANASTE!!";
                this.jugador = 3;
              }
              else {
                this.sangreJ1 -= j2.valor;
                if (this.sangreJ1 <= 0 ) { // PIERDES
                  this.mensajeRes = "No aguantas más y mueres a manos del enemigo";
                  /** PIERDES */
                  this.mensajeResFinal = "PERDISTE!!";
                  this.jugador = 3;
                }
                else {
                  this.mensajeRes = "Sigues de pie a pesar de las heridas";
                }
              }
            }
          }
        }
      }
      else if (j1.accionVal == 2) { // DEFIENDO
        if (j1.valor == 20) { // DEFENSA MORTAL
          if (j2.accionVal == 2) { // DEFENSA MORTAL + ENEMIGO DEFENDIO
            this.mensajeRes = "Nadie se movió, ¡que esperan!";
          }
          else { // DEFENSA MORTAL + ENEMIGO ATACO
            if (j2.valor == 20) { // DEFENSA MORTAL + GOLPE MORTAL
              this.mensajeRes = "Tu defensa es efectiva ante un ataque tan poderoso y no te hace daño alguno";
            }
            else { // DEFENSA MORTAL + GOLPE NORMAL
              this.mensajeRes = "Los golpes de tu enemigo no son nada a comparación de tu defensa";
            }
          }
        }
        else { // DEFENSA NORMAL
          if (j2.accionVal == 2) { // DEFENSA NORMAL + ENEMIGO DEFENDIO
            this.mensajeRes = "¿A que juegan?";
          }
          else { // DEFENSA NORMAL + ENEMIGO ATACO
            if (j2.valor == 20) { // DEFENSA NORMAL + GOLPE MORTAL
              var resta = j2.valor - j1.valor;
              this.sangreJ1 -= resta;
              if (this.sangreJ1 <= 0) {
                this.mensajeRes = "No puedes hacer nada frente a tal ataque, mueres al instante";
                /** PIERDES */
                this.mensajeResFinal = "PERDISTE!!";
                this.jugador = 3;
              }
              else {
                this.mensajeRes = "A pesar del tremendo ataque, aún sigues de pie";
              }
            }
            else { // DEFENSA NORMAL + GOLPE NORMAL
              if (j1.valor >= j2.valor) {
                this.mensajeRes = "Resistes el golpe sin titubeos";
              }
              else {
                // CALCULO
                var resta = j2.valor - j1.valor;
                this.sangreJ1 -= resta;
                if (this.sangreJ1 <= 0) { // PIERDES
                  this.mensajeRes = "No puedes continuar, tu defensa falló y mueres";
                  /** PIERDES */
                  this.mensajeResFinal = "PERDISTE!!";
                  this.jugador = 3;
                }
                else {
                  this.mensajeRes = "Aún sigues vivo a pesar del daño";
                }
              }
            }
          }
        }
      }
      if (this.jugador != 3) {
        this.jugador = 0;
      }
      
    }
  }

}
