import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// imports for the apps components 
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';

import { ClothesComponent } from './clothes/clothes.component';
import { DressdetailComponent } from './dressdetail/dressdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinalizationComponent } from './finalization/finalization.component';

// paths to give functionality to the navigation bar 
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'sign', component: SignComponent},
  { path: 'list', component: ListComponent},
  { path: 'list/clothes', component: ClothesComponent},
  { path: 'dressdetail/cart', component: CartComponent},
  { path: 'cart', component: CartComponent},
  { path: 'cart/checkout', component: CheckoutComponent},
  { path: 'dressdetail/cart/checkout', component: CheckoutComponent},
  { path: 'cart/checkout/finalization', component: FinalizationComponent},
  { path: 'dressdetail/cart/checkout/finalization', component: FinalizationComponent},
  { path: 'dressdetail', component: DressdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
