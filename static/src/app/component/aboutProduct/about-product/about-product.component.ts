import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchEventHandle(e){
    console.log('e:'+e);
  }

}
