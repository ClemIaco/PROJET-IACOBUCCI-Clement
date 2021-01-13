import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'client-account', loadChildren: () => import('./modules/formulaire/formulaire.module').then(m => m.FormulaireModule)},
  { path: 'auth', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)},
  { path: 'products', loadChildren: () => import('./modules/search-engine/search-engine.module').then(m => m.SearchEngineModule)},
  { path: 'store', loadChildren: () => import('./modules/store/store.module').then(m => m.StoreModule)},
  { path: 'detail/:id', loadChildren: () => import('./modules/detail/detail.module').then(m => m.DetailModule)},
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
