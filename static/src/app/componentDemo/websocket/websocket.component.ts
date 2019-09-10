import { Component, OnInit } from '@angular/core';
import {WebSocketDemoService} from "../../shared/web-socket-demo.service";

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {

  constructor(private wsService: WebSocketDemoService) { }

  ngOnInit() {
    this.wsService.createObservableSocket("ws://localhost:8085")
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        () => console.log('流已经结束')
      )
  }

  sendMessageToServer(){
    this.wsService.sendMessage("hello from client");
  }

}
