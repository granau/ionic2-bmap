import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//定义的一些组件
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { SignPage } from '../pages/sign/sign';
import { AboutPage } from '../pages/about/about';
//二级推送页
import { RegisterPage } from "../pages/register/register";
import { TermPage } from "../pages/term/term";
//百度地图
import { Bdmap } from '../components/bdmap/bdmap';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MapPage,
    SignPage,
    RegisterPage,
    AboutPage,
    TermPage,
    Bdmap
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MapPage,
    SignPage,
    RegisterPage,
    TermPage,
    AboutPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
