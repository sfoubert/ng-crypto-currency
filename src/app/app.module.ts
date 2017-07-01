import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';
import { CoinListComponent } from './coin-list/coin-list.component';
import { PriceComponent } from './price/price.component';
import { CoinService } from 'app/coin-list/coin.service';
import { PriceListComponent } from './price-list/price-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    PriceComponent,
    PriceComponent,
    PriceListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [
    CryptoCompareService,
    CoinService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
