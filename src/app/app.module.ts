import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ButtonchangeComponent } from './buttonchange/buttonchange.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ButtonchangeComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
