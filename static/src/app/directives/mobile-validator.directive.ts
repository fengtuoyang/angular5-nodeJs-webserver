import { Directive } from '@angular/core';
import {mobileValidator} from '../validator/validators';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[mobileValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
