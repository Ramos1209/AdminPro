import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';





@NgModule({
  declarations: [
    AppComponent,
  
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule ,
    AuthModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
