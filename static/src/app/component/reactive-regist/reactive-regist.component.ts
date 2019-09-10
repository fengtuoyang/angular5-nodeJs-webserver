import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalValidator, mobileAsyncValidator, mobileValidator} from '../../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {



  formModel:FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['',[Validators.required,Validators.minLength(6)]],
      mobile: ['', mobileValidator,mobileAsyncValidator],
      passwordGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    let isValid:boolean = this.formModel.get('passwordGroup').valid;
    console.log('passwordGroup的校验结果是：' + isValid);

    let errors:any = this.formModel.get('passwordGroup').errors;
    console.log('passwordGroup的错误信息是：' + JSON.stringify(errors));

    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }

}
