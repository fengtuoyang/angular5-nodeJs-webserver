import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  birthday:Date = new Date();

  pi:number = 3.1415926;

  size:number = 7;

  constructor() { }

  ngOnInit() {
  }

}
