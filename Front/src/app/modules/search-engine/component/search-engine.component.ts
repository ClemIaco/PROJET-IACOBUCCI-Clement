import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { Product } from '../../../shared/models/product';
import {ApiService} from '../../../shared/services/api.service';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent implements OnInit{
  
  constructor(private apiService: ApiService) { }
  
  public products : Observable<Product[]>;

  filterBar: FormGroup = new FormGroup({
    name: new FormControl(''),
    minPrice: new FormControl(0),
    maxPrice: new FormControl(500)
  });

  ngOnInit(): void {
   this.onSubmit();
  }

  onSubmit(): void {
    console.log(this.filterBar.value.name);
    console.log(this.filterBar.value.minPrice);
    console.log(this.filterBar.value.maxPrice);
    this.products = this.apiService.getProducts().pipe(
      map((products : Product[]) => products.filter((product : Product) => product.title.toLowerCase().includes(this.filterBar.value.name.toLowerCase()))),
      map((products : Product[]) =>products.filter((product : Product) => product.price >= this.filterBar.value.minPrice)),
      map((products : Product[]) =>products.filter((product : Product) => product.price <= this.filterBar.value.maxPrice))
    );
  }
}
