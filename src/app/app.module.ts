import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNoEncontradaComponent } from './pages/pagina-no-encontrada/pagina-no-encontrada.component';

import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    PaginaNoEncontradaComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
