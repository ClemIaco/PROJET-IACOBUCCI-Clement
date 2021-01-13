import { Injectable } from '@angular/core';  
import { ValidatorFn, AbstractControl } from '@angular/forms';  
import { FormGroup } from '@angular/forms';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class CustomFormValidationsService {  
  
  patternValidator(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } => {  
      if (!control.value) {  
        return null;  
      }  
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');  
      const valid = regex.test(control.value);  
      return valid ? null : { invalidPassword: true };  
    };  
  }  
  
  MatchPassword(password: string, confirmPassword: string) {  
    return (formGroup: FormGroup): { [key: string]: any } => {  
      const passwordControl = formGroup.controls[password];  
      const confirmPasswordControl = formGroup.controls[confirmPassword];  
  
      if (!passwordControl || !confirmPasswordControl) {  
        return null;  
      }  
  
      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {  
        return null;  
      }  
  
      if (passwordControl.value !== confirmPasswordControl.value) {  
        confirmPasswordControl.setErrors({ passwordMismatch: true });  
      } else {  
        confirmPasswordControl.setErrors(null);  
      }  
    }  
  }  
  
  NameValidator(name: string) {  
    return (control: AbstractControl): { [key: string]: any } => {  
      if (!control.value) {  
        return null;  
      }  
      const regex = new RegExp("[^0-9]");  
      const valid = regex.test(control.value);  
      return valid ? null : { invalidName: true };  
    };  
  }  

  PostalCodeValidator(postalCode: string) {  
    return (control: AbstractControl): { [key: string]: any } => {  
      if (!control.value) {  
        return null;  
      }  
      const regex = new RegExp("^\\d{5}$");  
      const valid = regex.test(control.value);  
      return valid ? null : { invalidPostalCode: true };  
    };  
  }  

 CityValidator(city: string) {  
    return (control: AbstractControl): { [key: string]: any } => {  
      if (!control.value) {  
        return null;  
      }  
      const regex = new RegExp("[^0-9]$");  
      const valid = regex.test(control.value);  
      return valid ? null : { invalidCity: true };  
    };  
  }  

  EmailValidator(email: string) {  
    return (control: AbstractControl): { [key: string]: any } => {  
      if (!control.value) {  
        return null;  
      }  
      const regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");  
      const valid = regex.test(control.value);  
      return valid ? null : { invalidEmail: true };  
    };  
  }  

  CountryValidator(country: string) {  
    return (control: AbstractControl): { [key: string]: any } => {  
      if (!control.value) {  
        return null;  
      }  
      const regex = new RegExp("[^0-9]$");  
      const valid = regex.test(control.value);  
      return valid ? null : { invalidCountry: true };  
    };  
  }

} 