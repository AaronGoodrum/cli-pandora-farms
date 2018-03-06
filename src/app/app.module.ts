import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavCmpComponent } from './navbar/nav-cmp/nav-cmp.component';


@NgModule({
  declarations: [
    AppComponent,
    NavCmpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
