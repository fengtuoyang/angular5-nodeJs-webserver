import {Component, Input, OnInit} from '@angular/core';
import {StockQuote} from '../communicate-output/communicate-output.component';

@Component({
  selector: 'app-communicate-input',
  templateUrl: './communicate-input.component.html',
  styleUrls: ['./communicate-input.component.css']
})
export class CommunicateInputComponent implements OnInit {

  @Input()
  stockQuote: StockQuote;

  constructor() {

  }

  ngOnInit() {
  }

}

