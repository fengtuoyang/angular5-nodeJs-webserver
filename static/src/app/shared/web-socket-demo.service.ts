import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WebSocketDemoService {

  ws: WebSocket;

  constructor() { }

  //创建一个可观测的websocket，跟服务器创建一个连接，返回一个流，流里包含服务器发送来的消息
  createObservableSocket(url:string): Observable<any> {
    this.ws = new WebSocket(url);  //根据url连接到指定服务器
    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      }
    )
  }

  //往服务器发送消息
  sendMessage(message: any){
    this.ws.send(message);
  }

}
