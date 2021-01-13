import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';   
import { CustomFormValidationsService } from '../shared/services/custom-form-validations.service';  

@Directive({
  selector: '[appCityPattern]',    
  providers: [{ provide: NG_VALIDATORS, useExisting: CityPatternDirective, multi: true }] 
})
export class CityPatternDirective implements Validator {  
  @Input('appCityPattern') CityValidator: string;  
    
  constructor(private customValidator: CustomFormValidationsService) { }    
    
  validate(control: AbstractControl): { [key: string]: any } | null {    
    return this.customValidator.CityValidator(this.CityValidator)(control);    
  }  
}

