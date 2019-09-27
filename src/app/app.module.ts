import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { ListComponent } from './list/list.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ClothesComponent } from './clothes/clothes.component';
import { CartComponent } from './cart/cart.component';
import { DressdetailComponent } from './dressdetail/dressdetail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FinalizationComponent } from './finalization/finalization.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignComponent,
    ListComponent,
    ClothesComponent,
    CartComponent,
    DressdetailComponent,
    CheckoutComponent,
    FinalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
