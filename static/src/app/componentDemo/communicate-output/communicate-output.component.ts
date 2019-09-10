import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-communicate-output',
  templateUrl: './communicate-output.component.html',
  styleUrls: ['./communicate-output.component.css']
})
export class CommunicateOutputComponent implements OnInit {

  stock:string = 'IBM';

  price:number;

  stockQuote:StockQuote;

  @Output()
  oStockQuote:EventEmitter<StockQuote> = new EventEmitter();

  constructor() {
    setInterval(()=>{
      this.stockQuote = new StockQuote(this.stock,Math.random()*100);
      this.stock = this.stockQuote.stock;
      this.price = this.stockQuote.lastPrice;
    },1000);
  }

  ngOnInit() {
  }

  buyStock(event){
    this.oStockQuote.emit(this.stockQuote);
  }

}
export class StockQuote{
  constructor(
    public stock:string,
    public lastPrice:number
  ){}
}
