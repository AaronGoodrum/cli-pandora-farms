
import{ ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavCmpComponent } from './navbar/nav-cmp/nav-cmp.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OffersComponent } from './offers/offers.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent },
  { path: 'about', component:AboutUsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'products', component:ProductsComponent },
  { path: 'contact', component:ContactsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);