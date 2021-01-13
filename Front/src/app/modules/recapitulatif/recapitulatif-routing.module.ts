import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecapitulatifComponent } from './component/recapitulatif.component';

const routes : Routes = [
    {
      path: '', component: RecapitulatifComponent
    }
]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class RecapitulatifRoutingModule { }