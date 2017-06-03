import { Component } from '@angular/core';

import { Lista } from '../lista/lista';
import { Batalla } from '../batalla/batalla';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tab1;
  public tab2;
  public tab3;

  constructor() {
    this.tab1 = Lista;
    this.tab2 = Batalla;
  }

}
