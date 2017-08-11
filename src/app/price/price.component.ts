import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
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
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0)',
      })),
      state('active', style({
        backgroundColor: '#eee',
        transform: 'translateX(0) scale(1)',
      })),
      state('mouse', style({
        backgroundColor: 'green',
        transform: 'translateY(5%) scale(1)',
      })),
      transition('void => active', [
        style({ transform: 'translateX(0) scale(0)' }),
        animate(500)
      ]),
      transition('active <=> mouse', [
        style({ transform: 'translateX(0) scale(1)' }),
        animate(200)
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
      .subscribe(() => this.getPrice());
  }

  private getPrice() {
    this.cryptoCompareService.getPrice(this.coinSelected.name).subscribe(price =>
      this.price = price
    );
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
