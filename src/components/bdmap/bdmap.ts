//百度地图组件

import { Component, Renderer, OnInit } from '@angular/core';

let sourceGpsPoint: Array<Object> = [
  new BMap.Point(103.56, 32.458),
  new BMap.Point(103.26, 32.007),
  new BMap.Point(102.56, 31.956),
  new BMap.Point(103.01, 32.583),
]

@Component({
  selector: 'bd-map',
  template: '<div id="bd"><ion-spinner name="bubbles" color="primary"></ion-spinner></div>',
})
export class Bdmap implements OnInit {
  gpsPoints: Array<Object>;
  bdPoints: Array<Object>;

  constructor(private renderer: Renderer) {
    this.gpsPoints = sourceGpsPoint;
  }
  //导入地图
  ngOnInit(){
  //this.gpsToBaidu(this.gpsPoints);
  }

  //gps坐标转百度坐标
  gpsToBaidu(gpsPoints: Array<Object>){

    let convertor = new BMap.Convertor();
    convertor.translate(gpsPoints, 1, 5, (data)=>{
      if(data.status === 0) {
        this.bdPoints = data.points;
        let elm = this.renderer.selectRootElement('#bd')
        let map = new BMap.Map(elm);
        map.centerAndZoom(this.bdPoints[0], 8);
        map.enableScrollWheelZoom();
        let marker = new BMap.Marker(this.bdPoints[0],{title:"本人"});
        map.addOverlay(marker);
      }
      else{
        throw "坐标转换出错。";
      }
    })

  }

}
