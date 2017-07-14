import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';
import { CoinService } from 'app/coin-list/coin.service';
import { CryptoCompareResponse } from 'app/model/crypto-compare.response';
import { CoinModel } from 'app/model/coin.model';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent implements OnInit {

  public coins: CoinModel[] = new Array();

  @Input()
  public currencies: string[];

  constructor(private cryptoCompareService: CryptoCompareService,
    private coinService: CoinService) { }

  ngOnInit() {
    this.cryptoCompareService.getCoinList().subscribe(coin => {
      // filter currencies to display
      if (this.currencies.indexOf(coin.name) > -1) {
        this.coins.push(coin);
      }
    });
  }

  changeSelectedCoins() {
    this.coinService.setSelectedCoins(this.getSelectedCoins());
  }

  public getSelectedCoins(): string[] {
    return this.coins
      .filter(coin => coin.checked)
      .map(coin => coin.name)
  }

}
