import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/component/product-list.component';
import { SearchEngineComponent } from './component/search-engine.component';
import { SearchEngineRoutingModule } from './search-engine-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../shared/services/api.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchEngineComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchEngineRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class SearchEngineModule { }
