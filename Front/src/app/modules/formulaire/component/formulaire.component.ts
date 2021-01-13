import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { lettersOnlyValidator, numbersOnlyValidator, postalCodeValidator, emailValidator } from '../validators'
import { Client } from '../../../shared/models/client'
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../../shared/services/api.service';
import { Store } from '@ngxs/store';
import { RegisterCustomerLogin } from 'src/app/shared/actions/account-action';
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  
  formOk: Boolean = false;
  client$: Observable<Client>;
  registerSubscription: Subscription = null;
  
  constructor(private apiService: ApiService, private store: Store, private router: Router) {}
  
  public civility: string[] = ['Madame', 'Monsieur'];
  
    customerForm: FormGroup = new FormGroup({
    civility: new FormControl('Madame', [Validators.required]),
    name: new FormControl('', [Validators.required, lettersOnlyValidator]),
    firstname: new FormControl('', [Validators.required, lettersOnlyValidator]),
    address: new FormControl('', [Validators.required]),
    postalCode: new FormControl('', [Validators.required, postalCodeValidator]),
    city: new FormControl('', [Validators.required, lettersOnlyValidator]),
    country: new FormControl('', [Validators.required, lettersOnlyValidator]),
    phoneNumber: new FormControl('', [Validators.required, numbersOnlyValidator]),
    email: new FormControl('', [Validators.required, emailValidator]),
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]), 
    confirmPassword: new FormControl('', [Validators.required])  
  });


  get name(): AbstractControl { return this.customerForm.get('name'); }
  get firstname(): AbstractControl { return this.customerForm.get('firstname'); }
  get address(): AbstractControl { return this.customerForm.get('address'); }
  get postalCode(): AbstractControl { return this.customerForm.get('postalCode'); }
  get city(): AbstractControl { return this.customerForm.get('city'); }
  get country(): AbstractControl { return this.customerForm.get('country'); }
  get phoneNumber(): AbstractControl { return this.customerForm.get('phoneNumber'); }
  get email(): AbstractControl { return this.customerForm.get('email'); }
  get login(): AbstractControl { return this.customerForm.get('login'); }
  get password(): AbstractControl { return this.customerForm.get('password'); }
  get confirmPassword(): AbstractControl { return this.customerForm.get('confirmPassword'); }


  onSubmit() {  
    
    const client: Client = new Client(
      this.customerForm.value.civility,
      this.customerForm.value.name,
      this.customerForm.value.firstname,
      this.customerForm.value.address,
      this.customerForm.value.postalCode,
      this.customerForm.value.city,
      this.customerForm.value.country,
      this.customerForm.value.phoneNumber,
      this.customerForm.value.email,
      this.customerForm.value.login,
      this.customerForm.value.password
    );

    if (this.customerForm.valid)
    {
      this.formOk = true;
    }

    this.client$ = this.apiService.registerCustomer(client);

    if (this.registerSubscription != null){
      this.registerSubscription.unsubscribe();
    }

    this.registerSubscription = this.client$.subscribe(res => {
      this.store.dispatch(new RegisterCustomerLogin(res.login));
    })

  }
}
