import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { RegisterCustomerLogin } from 'src/app/shared/actions/account-action';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(private router: Router, private apiService: ApiService, private store: Store) { }

  public loginResponse$: Observable<{success: boolean, login: string}>;
  private loginSubscription: Subscription = null;

  isAuthenticated: boolean = false;
  token_JWT: string;

  authForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  get login(): AbstractControl { return this.authForm.get('login'); }
  get password(): AbstractControl { return this.authForm.get('password'); }

  ngOnDestroy(): void {
    if (this.loginSubscription != null) {
      this.loginSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    this.loginResponse$ = this.apiService.authenticate(this.authForm.value.login, this.authForm.value.password);
   
    if (this.loginSubscription != null){
      this.loginSubscription.unsubscribe();
    }

    this.loginSubscription = this.loginResponse$.subscribe(body => {    
      if (body.success){
        this.store.dispatch(new RegisterCustomerLogin(body.login));
        this.isAuthenticated = true;
      }
      else {
        this.authForm.setErrors({      
          loginOrPasswordInvalid: true
        });
      }
     
    })
  }

  /*onSubmit(): void {
    this.apiService.authenticate(this.authForm.value.login, this.authForm.value.password).subscribe(res => {

      if (res.body.success)
      {
          this.isAuthenticated = true;
          this.token_JWT = res.headers.get("authorization");
          console.log(this.token_JWT);
      }
      else {
        this.authForm.setErrors({
          loginOrPasswordInvalid: true
        });
      }
    });
  }*/
}
