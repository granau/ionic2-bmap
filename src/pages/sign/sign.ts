import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html'
})
export class SignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

  registing(){
    this.navCtrl.push(RegisterPage);
  }
}
