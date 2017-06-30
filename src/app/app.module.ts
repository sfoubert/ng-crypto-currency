import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';
import { CoinListComponent } from './coin-list/coin-list.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    PriceComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    CryptoCompareService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
