//导入全局百度地图库
import "../thirdlib/bmap.js";
//导入rxjs操作符
import  'rxjs/add/observable/from';
import  'rxjs/add/observable/of';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/find';
import  'rxjs/add/operator/delay';
import  'rxjs/add/operator/first';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
