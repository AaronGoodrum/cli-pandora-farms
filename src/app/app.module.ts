
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavCmpComponent } from './navbar/nav-cmp/nav-cmp.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OffersComponent } from './offers/offers.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    NavCmpComponent,
    AboutUsComponent,
    OffersComponent,
    ProductsComponent,
    ContactsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routes,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
