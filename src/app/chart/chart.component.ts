import { Component, Input, OnChanges } from '@angular/core';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';
import 'rxjs/add/operator/toArray';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  @Input()
  public currency: string;

  public data: Array<any>;

  constructor(private cryptoCompareService: CryptoCompareService) { }

  ngOnChanges() {
    this.generateData();
  }

  generateData() {
    this.cryptoCompareService.getHistoDay(this.currency).toArray().subscribe(histo => {
      this.data = histo;
    });

  }

}
