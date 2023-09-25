import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HerosecComponent } from './herosec/herosec.component';
import { FooterComponent } from './footer/footer.component'
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { EmpRegionComponent } from './empregion/empregion.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HerosecComponent,
    FooterComponent,
    ProductsComponent,
    ProductComponent,
    EmpRegionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
