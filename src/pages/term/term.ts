import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ITEMSS } from './itemss';

@Component({
  selector: 'page-term',
  templateUrl: 'term.html'
})
export class TermPage {
  terms = ITEMSS;
  constructor(public viewCtrl: ViewController) {}

  onDiss(){
    this.viewCtrl.dismiss();
  }
}
