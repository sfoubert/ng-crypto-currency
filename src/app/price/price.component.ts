import { Component, OnInit, Input } from '@angular/core';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';
import { Price } from 'app/model/price';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input()
  public currency: string;

  public price: Price;

  constructor(private cryptoCompareService: CryptoCompareService) { }

  ngOnInit() {
    Observable.interval(20 * 1000)
      .subscribe(() => this.getPrice());
  }

  private getPrice() {
    this.cryptoCompareService.getPrice(this.currency).subscribe(price =>
      this.price = price
    );
  }

}
