import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Shake } from '@ionic-native/shake';
import { NativeAudio } from '@ionic-native/native-audio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Historia } from '../pages/historia/historia';
import { Batalla } from '../pages/batalla/batalla';
import { Lista } from '../pages/lista/lista';
import { Motor } from '../pages/motor/motor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Historia,
    Batalla,
    Lista,
    Motor
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Historia,
    Batalla,
    Lista,
    Motor
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Shake,
    NativeAudio
  ]
})
export class AppModule {}
