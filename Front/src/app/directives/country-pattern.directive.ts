import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';   
import { CustomFormValidationsService } from '../shared/services/custom-form-validations.service';  

@Directive({
  selector: '[appCountryPattern]',    
  providers: [{ provide: NG_VALIDATORS, useExisting: CountryPatternDirective, multi: true }]
})
export class CountryPatternDirective implements Validator {

  @Input('appCountryPattern') CountryValidator: string;  
    
  constructor(private customValidator: CustomFormValidationsService) { }    
    
  validate(control: AbstractControl): { [key: string]: any } | null {    
    return this.customValidator.CountryValidator(this.CountryValidator)(control);    
  }  

}
