import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ProductosComponent } from './productos/productos.component';
import { ButtonchangeComponent } from './buttonchange/buttonchange.component';
=======
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
>>>>>>> 22b8898b41484e52de17e8ef4212b906bac5b6aa

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProductosComponent,
    ButtonchangeComponent
=======
    HeaderComponent,
    AboutComponent
>>>>>>> 22b8898b41484e52de17e8ef4212b906bac5b6aa
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
