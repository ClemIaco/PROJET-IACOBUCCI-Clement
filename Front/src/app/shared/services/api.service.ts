import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../../shared/models/product';
import { Client } from '../../shared/models/client';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public token_jwt: string;

  public getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(environment.productsAPI);
  }

  public getProductById(id: number) : Observable<Product> {
    return this.getProducts().pipe(map(product => product.find(product => product.id == id)));
  }

  public registerCustomer(client: Client) : Observable<Client> {
    let body = new URLSearchParams();
    body.set('civility', client.civility);
    body.set('name', client.name);
    body.set('firstname', client.firstname);
    body.set('address', client.address);
    body.set('postalCode', client.postalCode);
    body.set('city', client.city);
    body.set('country', client.country);
    body.set('phoneNumber', client.phoneNumber);
    body.set('email', client.email);
    body.set('login', client.login);
    body.set('password', client.password);
    return this.http.post<{user: Client}>(environment.backendAPI + 'user/register',body.toString(), 
    { headers: { 'content-type': 'application/x-www-form-urlencoded' }}).pipe(map(res => res.user));
  }

  public authenticate(login: string, password: string) : Observable<{success: boolean, login: string}> {
    let body = new URLSearchParams();
    body.set('login', login);
    body.set('password', password);
    return this.http.post<{success: boolean, login: string}>(environment.backendAPI + 'user/login',body.toString(), 
    { 
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    });
  }

  public getCustomer(login: string) : Observable<Client> {
    return this.http.get<Client>(environment.backendAPI + 'user/' + login);
  }
}

  /*public authenticate(login: string, password: string) : Observable<any> {
    let body = new URLSearchParams();
    body.set('login', login);
    body.set('password', password);
    return this.http.post<Client>(environment.backendAPI + 'user/login',body.toString(), 
    { 
      headers: { 'content-type': 'application/x-www-form-urlencoded' }, 
      observe: 'response'
    });
  }
}*/
