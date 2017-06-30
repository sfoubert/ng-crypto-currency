import { Component, OnInit } from '@angular/core';
import { CurrencyService } from "app/currency/currency.service";
import { CryptoCompareResponse } from "app/model/crypto-compare-response";
import { Coin } from "app/model/coin";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  public coins: Coin[]= new Array();

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCoinList().subscribe(coin => {
      this.coins.push(coin);
    });
  }

}