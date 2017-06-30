import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { CurrencyService } from "app/currency/currency.service";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    CurrencyService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
