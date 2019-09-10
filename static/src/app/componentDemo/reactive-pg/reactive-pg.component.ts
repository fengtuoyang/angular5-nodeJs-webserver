import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-reactive-pg',
  templateUrl: './reactive-pg.component.html',
  styleUrls: ['./reactive-pg.component.css']
})
export class ReactivePgComponent implements OnInit {

  searchInput:FormControl = new FormControl();

  constructor() {
    this.searchInput.valueChanges
      .debounceTime(500)
      .subscribe(stockCode => this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }

  getStockInfo(value: string){
    console.log(value);
  }

}
