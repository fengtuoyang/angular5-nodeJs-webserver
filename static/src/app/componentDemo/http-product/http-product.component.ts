import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import "rxjs/Rx";

@Component({
  selector: 'app-http-product',
  templateUrl: './http-product.component.html',
  styleUrls: ['./http-product.component.css']
})
export class HttpProductComponent implements OnInit {

  products:Observable<any>;

  constructor(private http: Http) {
    this.products = this.http.get('/api/products').map(res => res.json());
  }

  ngOnInit() {

  }

}
