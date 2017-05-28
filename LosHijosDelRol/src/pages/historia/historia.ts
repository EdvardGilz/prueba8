import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';

import { HistoriasDataModel } from '../../models/models';

/**
 * Generated class for the Historia page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
})
export class Historia {
  public historiaConf: HistoriasDataModel;
  public historiaData;
  public historia;
  public botones;
  public ban;
  public res;
  public resBatalla;

  constructor(public navParams: NavParams,
              public navCtrl: NavController) {
    this.historiaConf = navParams.get("data");
    this.historiaData = [
      {"opcion": "inicio", 
       "txt":    `Eres un joven pueblerino, lo suficientemente joven para aún vivir con tus padres pero no tanto como para que te digan que hacer, así que después de una discusión con ellos decides salir a tomar el aire.
Mientras caminas recuerdas como tu padre te "aconseja" seguir sus pasos, que es tu deber cuidar las tierras, tu cansado de que siempre te diga lo mismo le gritas: "YO NO SOY IGUAL QUE TU, YO QUIERO SER UN GUERRERO!!".
A lo lejos ves algo que te arranca de tus pensamientos: un hombre montado a caballo; que raro, no recuerdas a algún vecino con ese aspecto, ¿que hará por aquí?; de repente hace un giro brusco con el caballo levantado en sus patas traceras y comienza el galope, vez que desenvaina su espada en dirección a un hombre que torpemente corre por su vida, pero no es suficiente, la hoja de la espada atravieza el cuerpo del hombre y en tu mente resuenan las palabras "YO QUIERO SER UN GUERRERO!!".
Es tu oportunidad de provar que no eres un simple campesino y demostrar de una vez por todas de que estas hecho. 
¿Qué decides hacer?
[Opc-1]Enfrentarlo y ver que tal te va.
[Opc-2]No arriesgarte y seguir tu camino.`},

      {"opcion": "Opc-1", 
       "txt":    `Corres gritando y manoteando en dirección al hombre, sientes como la adrenalina sube por tu estómago dandole fuerza a tus piernas y brazos.
El hombre voltea a verte con una mirada de desconcierto y diversión, baja de su caballo y espera a que te acerques mientras limpia la sangre de su espada en la camisa del hombre muerto, eso te hace enojar aún más y cuando está a tu alcance sueltas un puñetazo que va directo a su cara.
Ni siquiera alcanzas a levantar el puño cuando el hombre ya te tiene sujeto del cuello, sientes su gran mano asfixiandote; escuchas que algo dice pero no puedes entender las palabras, lo único que viene a tu mente es el sollozo de tu madre diciendote entre lágrimas que ese camino te iba a matar.
Y así fue como tu impulsividad te llevó a la muerte.
[Fin]`},

      {"opcion": "Opc-2", 
       "txt":    `Es un hombre muy grande, facilmente ha de triplicar tu peso y obviamente cuenta con muchísima más experiencia, crees que lo más sensato es alejarse de ahí y rezar por que no haya más por los alrededores.
¿Que decides hacer?
[Opc-3]Investigar si hay más y que es lo que hacen aquí.
[Opc-4]Regresar a tu casa a contarles a tus papás lo que viste, tal vez ellos sepan algo.`},

      {"opcion": "Opc-3", 
       "txt":    `Sigues caminando por el sendero en el que ibas sin quitarte de la mente la imagen del hombre muerto, crees recordar haberlo visto en el pueblo caminando por ahí, no estas seguro si tiene uno o dos hijos, ¿cómo le ibas a decir a su esposa que no hiciste nada para ayudarlo?, que eres un cobarde...
Ese pensamiento te hace enfurecer; adelante vez un joven con la misma pinta que el hombre de antes, recoges un palo que habia tirado en el camino y te abalanzas sobre él.
[Batalla]
[Res-1] Haz perdido la batalla, aquí termina tu aventura. [Fin]
[Res-2] El joven malherido por la golpiza que le diste te dijo burlonamente que tu no podrías deterlos, que solo eras un estupido pueblerino y que ellos eran apenas la fuerza de reconocimiento, que te inclinaras ante el gran maestro y posiblemente te perdone la vida para unirte a sus fuerzas, como el... [Opc-4]`},

      {"opcion": "Opc-4", 
       "txt":    `Corres hacia tu casa esperando no encontrarte con alguno de esos salvajes cuando vez una columna de humo proveniente del centro del pueblo, aprietas el paso y rezas por que todo este bien.
Te escondes detras de unos arbustos desde donde alcanzas a ver tu casa, parece que por ahí esta todo tranquilo, pero notas que la puerta esta destrozada y vez un rastro de sangre que sale por la puerta.
La posibilidad de que aún haya un enemigo dentro es muy alta, tal vez pudiste con uno de tu edad, ¿pero si te encuentras con alguien más salvaje?
¿Que decides hacer?
[Opc-5] Ir a investigar tu casa.
[Opc-6] Huir antes que alguien te vea.`},

      {"opcion": "Opc-5", 
       "txt":    `Volteas para todos lados, con el corazón latiendo a todo lo que da cruzas rápidamente el camino hasta la puerta de tu casa, brincas sobre el rastro de sangre y vez que todo está tirado, las ventanas estan rotas, la mesa volteada, escuchas un sonido que te hace pegar un brinco y al voltear vez que tu papá esta tirado destras de la mesa con una herida en el estomago por la cual la sangre brota a chorros; corres a su lado y sosteniendo su cabeza escuchas sus últimas palabras: "No hagas una estupidez".
Quieres gritar, salir corriendo a tirar golpes, pero recuerdas que solo eres un chiquillo con un sueño tonto, pero ahora ese sueño se ha convertido en una motivación; sales de tu casa rápido pero sigiloso, cuidando que nadie te vea.
Emprendes el camino, dejando atrás el lugar que te vio nacer, con lágrimas en los ojos pero con un objetivo en el corazón: convertirte en el mejor guerrero del mundo y encontrar a quien hizo esto para hacerlo pagar.
[Fin]`},

      {"opcion": "Opc-6", 
       "txt":    `Mientras te alejas del lugar que te vio nacer tu mente no para de preguntarse ¿qué fue lo que paso?, ¿quiénes eran esos tipos?, ¿qué les pasó a tus papás?.
Pero tu no puedes hacer nada, no tienes la preparación física para hacerles frente, ni siquiera sabes cuantos son y si siguen ahí, pero esto no termina aquí, vas a averiguar quienes son y, cuando llegue el momento indicado, los harás pagar por lo que han hecho.
[Fin]`}];
    
    this.continuar("inicio");
  };

  continuar(id) {
    if (id == "Fin") {
      this.navCtrl.pop();
    }
    else {
      this.historia = "";
      this.botones = [];
      this.resBatalla = "";

      for (var i=0; i < this.historiaData.length; i++) {
        if (this.historiaData[i].opcion == id) {
          this.ban = 0;
          var tmp = this.historiaData[i].txt.replace(/\n/g, "<br><br>").split("[");
          for (var j=0; j<tmp.length; j++) {
            if (tmp[j].search("]") == -1) {
              this.historia += tmp[j];
            }
            else {
              if (tmp[j].search("Opc") > -1) {
                var tmp2 = tmp[j].split("]");
                if (tmp2.length > 0 && tmp2[1] != "") {
                  this.botones.push({"opcion": tmp2[0], "txt": tmp2[1].replace(/<br>/g, "")});
                }
                else {
                  this.botones.push({"opcion": tmp2[0], "txt": "Continuar"});
                }
              }
              else if (tmp[j].search("Batalla") > -1) {
                this.ban = 1;
                break;
              }
              else if (tmp[j].search("Fin") > -1) {
                var tmp5 = tmp[j].split("]");
                this.botones.push({"opcion": tmp5[0], "txt": "Continuar"});
              }
              else {
                console.log(tmp[j]);
              }
            }
          }
          if (this.ban == 1) {
            this.res = Math.floor((Math.random() * 2) + 1);
            for (var j=0; j<tmp.length; j++) {
              if (tmp[j].search("]") > -1) {
                var tmp3;
                var tmp4;
                if (this.res == 1 && tmp[j].search("Res-1") > -1) {
                  tmp3 = tmp[j].split("]");
                  tmp4 = tmp[j+1].split("]");
                  this.resBatalla = tmp3[1];
                  if (tmp4[0] == "Fin") {
                    this.botones.push({"opcion": tmp4[0], "txt": "Continuar"});
                  }
                  else {
                    this.botones.push({"opcion": tmp4[0], "txt": "Continuar"});
                  }
                }
                else if (this.res == 2 && tmp[j].search("Res-2") > -1) {
                  tmp3 = tmp[j].split("]");
                  tmp4 = tmp[j+1].split("]");
                  this.resBatalla = tmp3[1];
                  if (tmp4[0] == "Fin") {
                    this.botones.push({"opcion": tmp4[0], "txt": "Continuar"});
                  }
                  else {
                    this.botones.push({"opcion": tmp4[0], "txt": "Continuar"});
                  }
                }
              }
            }
          }
        }
      }
    }
    
  }

}
