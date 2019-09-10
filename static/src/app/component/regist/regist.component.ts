import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any, valid:boolean){
    console.log(value);
    console.log(valid);
  }

  usernameValid: boolean = true;
  usernameUntouched: boolean = true;

  onUsernameInput(form: NgForm){
    if(form){
      this.usernameValid = form.form.get('username').valid;
      this.usernameUntouched = form.form.get('username').untouched;
    }
  }

}
