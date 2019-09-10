import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {dateValidator, equalValidator, mobileValidator} from "../../validator/validators";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel:FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(2)]),
    passwordGroup: new FormGroup({
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      pconfirm: new FormControl()
    }, {validators: equalValidator}),
    mobile: new FormControl(null, mobileValidator),
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }, {validators: dateValidator}),
    emails: new FormArray([
      new FormControl("a@a.com"),
      new FormControl("b@b.com")
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    // let value: boolean = this.formModel.get('mobile').value;
    // console.log('mobile内容是:' + value);
    //
    // let isValid: boolean = this.formModel.get('mobile').valid;
    // console.log('mobile校验结果是:' + isValid);
    //
    // let isErrors: any = this.formModel.get('mobile').errors;
    // console.log('mobile校验结果是校验的错误信息是:' + JSON.stringify(isErrors));
    //
    // let value2: boolean = this.formModel.get('dateRange').value;
    // console.log('dateRange内容是:' +JSON.stringify(value2) );
    //
    // let isValid2: boolean = this.formModel.get('dateRange').valid;
    // console.log('dateRange校验结果是:' + isValid2);
    //
    // let isErrors2: any = this.formModel.get('dateRange').errors;
    // console.log('dateRange校验结果是校验的错误信息是:' + JSON.stringify(isErrors2));

      if(this.formModel.valid){
        console.log(this.formModel.value);
      }
  }

  addEmail(){
    let emails = this.formModel.get("emails") as FormArray;
    emails.push(new FormControl());
  }

}
