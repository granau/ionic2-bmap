import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map'
import { SignPage } from '../sign/sign'
import { AboutPage } from '../about/about'

/*
  Generated class for the Tabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = MapPage;
  tab2Root: any = SignPage;
  tab3Root: any = AboutPage;

  constructor(public navCtrl: NavController) {

  }

}
