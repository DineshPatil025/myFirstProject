import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosecComponent } from './herosec/herosec.component';
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerosecComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
