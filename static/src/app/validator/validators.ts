import {FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export function mobileValidator(control:FormControl): any {
  var myreg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
  if(!control.value){
    return {mobile: '*请填写手机号'}
  }else if(!myreg.test(control.value)){
    return {mobile: '*手机号不符合规则'}
  }else{
    return null;
  }
}

export function mobileAsyncValidator(control:FormControl): any {
  var myreg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
  let valid = myreg.test(control.value);
  return Observable.of(valid ? null : {mobile: '手机号不符合规则'}).delay(5000);
}

export function equalValidator(group: FormGroup): any {
  let password:FormControl = group.get('password') as FormControl;
  let pconfirm:FormControl = group.get('pconfirm') as FormControl;
  let valid:boolean = (password.value == pconfirm.value);
  return valid ? null : {equal: {desc: '*密码与确认密码不匹配'}};
}

export function dateValidator(group: FormGroup): any {
  let from: FormControl = group.get('from') as FormControl;
  let to: FormControl = group.get('to') as FormControl;
  if((!from.value) || (!to.value)){
    return {date: "*日期必须填写"}
  }else if(from.value.replace('-','') > to.value.replace('-','')){
    return {date: "*截止日期不得早于起始日期"}
  }else{
    return null;
  }
}
