import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';
import { Price } from 'app/model/price';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnDestroy {

  @Input()
  public currency: string;

  public price: Price;

  private timer: Subscription;

  constructor(private cryptoCompareService: CryptoCompareService) { }

  ngOnInit() {
    this.getPrice();
    this.timer = Observable.interval(20 * 1000)
      .subscribe(() => this.getPrice());
  }

  private getPrice() {
    this.cryptoCompareService.getPrice(this.currency).subscribe(price =>
      this.price = price
    );
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}
