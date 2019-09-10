import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;
declare var Swiper: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let myswiper = new Swiper('.s', {
      pagination: {
        el: '.swiper-pagination'
      }
    });
    
  }

}
