import { ChartComponent } from '../chart/chart.component';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CoinService } from 'app/coin-list/coin.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit, OnDestroy {

  coins: string[];

  private subscription: Subscription;

  public displayChart = false;
  public currency = 'ETH';

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.subscription = this.coinService.getSelectedCoins().subscribe(selectedCoins =>
      this.coins = selectedCoins
    );
  }

  public currencyClicked(currency: string) {
    this.displayChart = true;
    this.currency = currency;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
