import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './component/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailRoutingModule } from './detail-routing.module';
import { ApiService } from '../../shared/services/api.service';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DetailRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class DetailModule { }
