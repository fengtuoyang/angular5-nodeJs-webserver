import { Component } from '@angular/core';
import {StockQuote} from './componentDemo/communicate-output/communicate-output.component';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //组件间通讯:输入属性
  // stock = '';

  //组件间通讯:输出属性
  stockQuote: StockQuote = new StockQuote('',0);
  butHandler(event:StockQuote){
    this.stockQuote = event;
  }

  constructor(){
    console.log(environment.envInfo);
  }


}
