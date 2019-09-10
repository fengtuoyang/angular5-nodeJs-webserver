import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gd-map',
  templateUrl: './gd-map.component.html',
  styleUrls: ['./gd-map.component.css']
})
export class GdMapComponent implements OnInit {

  private AWebServiceKey:string = '7c104eeb0a50ee403ef9ab7ce30e44d1';

  map;

  oriPosition;

  constructor() {

  }

  ngOnInit() {
    this.getMap();
  }

  getMap() {
    //在typing.d.ts中声明AMap，否则new的时候，会报错
    $.ajax({
      url: "https://restapi.amap.com/v3/geocode/geo?key=" + this.AWebServiceKey + "&address=中国经济信息社&city=北京",
      type: 'get',
      success: (res) => {
        this.oriPosition = res.geocodes[0].location.split(',').map(it => parseFloat(it));
        //地图内容
        this.map = new AMap.Map('container', {
          center: this.oriPosition,
          zoom: 15
        });
        //点标记
        new AMap.Marker({
          map: this.map,
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: this.oriPosition,
          offset: new AMap.Pixel(-17, -42)
        });
      }
    })

  }

  //周围1km内的公司
  getAroundCmp(){
    $.ajax({
      url: "https://restapi.amap.com/v3/place/around?key=" + this.AWebServiceKey + "&location=" + this.oriPosition + "&keywords=公司&type=170200&radius=1000&sortrule=distance",
      type: 'get',
      success: (res) => {
        let posi = res.pois.map(it => it.location.split(',').map(item => parseFloat(item)));
        posi.forEach((it, index) => {
          new AMap.Marker({
            map: this.map,
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            text: index,
            position: it,
            offset: new AMap.Pixel(-17, -42)
          });
        })

      }
    })






  }


}
