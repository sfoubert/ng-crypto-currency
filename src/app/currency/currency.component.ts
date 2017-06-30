import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from 'app/currency/currency.service';
import { CryptoCompareResponse } from 'app/model/crypto-compare-response';
import { Coin } from 'app/model/coin';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public coins: Coin[] = new Array();

  @Input()
  public currencies: string[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCoinList().subscribe(coin => {
      // filter currencies to display
      if (this.currencies.indexOf(coin.name) > -1) {
        this.coins.push(coin);
      }
    });
  }

}
