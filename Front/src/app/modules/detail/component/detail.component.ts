import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';
import {AddProduct } from '../../../shared/actions/product-action';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product$: Observable<Product>;

  id: number;
  title: string;
  price: number;
  description: string;
  imgUrl: string;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store, private apiService: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.product$ = this.apiService.getProductById(this.id);
  }

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
