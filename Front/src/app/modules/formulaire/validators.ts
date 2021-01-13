import { AbstractControl } from '@angular/forms'
import { FormGroup } from '@angular/forms';  

export function lettersOnlyValidator(control: AbstractControl): { [key: string]: any } {
    const regex = new RegExp("[^0-9]");
    const valid = regex.test(control.value);  
    return valid ? null : { number: true }; 
}

export function numbersOnlyValidator(control: AbstractControl): { [key: string]: any } {
    const regex = new RegExp("[0-9]");
    const valid = regex.test(control.value);  
    return valid ? null : { letters: true }; 
}

export function postalCodeValidator(control: AbstractControl): { [key: string]: any } {
    const regex = new RegExp("^\\d{5}$");
    const valid = regex.test(control.value);  
    return valid ? null : { invalidPostalCode: true }; 
}

export function emailValidator(control: AbstractControl): { [key: string]: any } {
    const regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    const valid = regex.test(control.value);  
      return valid ? null : { invalidEmail: true }; 
}

export function matchPasswordValidator(password: string, confirmPassword: string) {  
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