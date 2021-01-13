import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import {AddProduct } from '../../../shared/actions/product-action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Observable<Product[]>;
  id: number;
  title: string;
  price: number;
  description: string;
  imgUrl: string;

  constructor(private router: Router, private store: Store) { }


   onStore(productSelected: Product){
     this.title = productSelected.title;
     this.price = productSelected.price;
     this.description = productSelected.description;
     this.imgUrl = productSelected.imgUrl;

    this.addProduct(this.id, this.title, this.price, this.description, this.imgUrl);
    
    this.router.navigate(['store']);
  }

  addProduct(id: number, title: string, price: number, description: string, imgUrl: string){
    this.store.dispatch(new AddProduct ({ id, title, price, description, imgUrl }));
  }

}
