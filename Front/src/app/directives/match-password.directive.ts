import { Directive, Input } from '@angular/core';  
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';  
import { CustomFormValidationsService } from '../shared/services/custom-form-validations.service';  
  
@Directive({  
  selector: '[appMatchPassword]',  
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]  
})  
export class MatchPasswordDirective implements Validator {  
  @Input('appMatchPassword') MatchPassword: string[] = [];  
  
  constructor(private customValidator: CustomFormValidationsService) { }  
  
  validate(formGroup: FormGroup): ValidationErrors {  
    return this.customValidator.MatchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);  
  }  
}  
