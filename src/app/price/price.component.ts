import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import { Subscription } from 'rxjs/Subscription';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';
import { PriceModel } from 'app/model/price.model';
import { CoinModel } from '../model/coin.model';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
  animations: [
    trigger('priceState', [
      state('void', style({
        transform: 'translateX(0) scale(0)',
      })),
      state('active', style({
        backgroundColor: '#eee',
        transform: 'translateX(0) scale(1)',
      })),
      state('mouse', style({
        backgroundColor: 'grey',
        transform: 'translateY(5%) scale(1)',
      })),
      state('pricingPositive', style({
        backgroundColor: 'green',
        transform: 'scale(1)',
      })),
      state('pricingNegative', style({
        backgroundColor: 'red',
        transform: 'scale(1)',
      })),
      transition('void => active', [
        style({ transform: 'translateX(0) scale(0)' }),
        animate(500)
      ]),
      transition('active <=> mouse', [
        style({ transform: 'translateX(0) scale(1)' }),
        animate(200)
      ]),
      transition('active <=> pricingPositive', [
        animate(300)
      ]),
      transition('active <=> pricingPositive', [
        animate(300)
      ])
    ])
  ]
})
export class PriceComponent implements OnInit, OnDestroy {

  @Input()
  public coinSelected: CoinModel;

  @Output()
  public currencyClicked: EventEmitter<string> = new EventEmitter();

  public price: PriceModel;

  private timer: Subscription;

  public priceState = 'active';

  constructor(private cryptoCompareService: CryptoCompareService) { }

  ngOnInit() {
    this.getPrice();
    this.timer = Observable.interval(20 * 1000)
      .subscribe(() => this.getPrice(true));
  }

  private getPrice(animate: boolean = false) {
    this.cryptoCompareService.getPrice(this.coinSelected.name).subscribe(price => {
      if (animate) {
        const positive: boolean = parseFloat(price.EUR) >= parseFloat(this.price.EUR);
        this.animatePricing(positive);
      }
      this.price = price;
    }
    );
  }

  private animatePricing(positive: boolean = false) {
    this.priceState = positive ? 'pricingPositive' : 'pricingNegative';
    setTimeout(() => {
      this.priceState = 'active';
    }, 0.3 * 1000);
  }

  public mouseover() {
    this.priceState = 'mouse';
  }

  public mouseleave() {
    this.priceState = 'active';
  }

  public click() {
    this.currencyClicked.emit(this.coinSelected.name);
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}
