import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../../../shared/models/product';
import { ProductState } from '../../../shared/states/product-state'
import { DeleteProduct } from '../../../shared/actions/product-action';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  productList$: Observable<Product[]>;
  nbProducts$: Observable<number>;
  totalPrice$: Observable<number>;
  totalPriceWithTVA$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.productList$ = this.store.select(state => state.listProducts.products);
    this.nbProducts$ = this.store.select(ProductState.getNbProducts);
    this.totalPrice$ = this.store.select(ProductState.getTotalPrice);
    this.totalPriceWithTVA$ = this.store.select(ProductState.getTotalPriceWithTVA);
  }

  onDelete(product: Product): void {
    this.store.dispatch(new DeleteProduct(product));
  }

}
