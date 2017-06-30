import { Component, OnInit, Input } from '@angular/core';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';
import { CryptoCompareResponse } from 'app/model/crypto-compare-response';
import { Coin } from 'app/model/coin';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {

  public coins: Coin[] = new Array();

  @Input()
  public currencies: string[];

  constructor(private cryptoCompareService: CryptoCompareService) { }

  ngOnInit() {
    this.cryptoCompareService.getCoinList().subscribe(coin => {
      // filter currencies to display
      if (this.currencies.indexOf(coin.name) > -1) {
        this.coins.push(coin);
      }
    });
  }

}
