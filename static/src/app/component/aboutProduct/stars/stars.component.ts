import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  constructor() { }

  @Input()
  private rating: number = 0;

  private stars: boolean[];

  @Input()
  private readonly:boolean = true;

  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();

	ngOnInit() {
		this.stars = [];
		for(let i=1; i<=5; i++){
			this.stars.push(i > this.rating)
		}
  }

  clickStar(index:number){
	  if(!this.readonly){
      this.rating = index + 1;
      //点击触发ngOnChanges方法，所以这边可以不用重置this.stars
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges(changes: SimpleChanges) : void {
    this.stars = [];
    for(let i=1; i<=5; i++){
      this.stars.push(i > this.rating)
    }
  }

}
