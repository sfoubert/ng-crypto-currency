import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoinService } from 'app/coin-list/coin.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit, OnDestroy {

  coins: string[];

  private subscription: Subscription;

  public displayChart = false;
  public currencyChart = 'ETH';


  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.subscription = this.coinService.getSelectedCoins().subscribe(selectedCoins =>
      this.coins = selectedCoins
    );
  }

  public currencyClicked(currency: string) {
    this.displayChart = true;
    this.currencyChart = currency;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
