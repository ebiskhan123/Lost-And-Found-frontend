import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsModule } from './items/items.module'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
