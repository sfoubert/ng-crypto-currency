import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CryptoCompareService } from 'app/crypto-compare/crypto-compare.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input()
  public currency: string;

  private chartData: Array<any>;

  constructor(private cryptoCompareService: CryptoCompareService) { }

  ngOnInit() {
    setTimeout(() => {
      this.generateData();
    }, 1000);
  }

  ngOnChanges() {
    console.log(this.chartData);
  }

  generateData() {

    this.cryptoCompareService.getHistoDay(this.currency).subscribe(histo => {
      if (!this.chartData) {
        this.chartData = [];
      }
      const data = { date: histo.time, close: histo.close };
      this.chartData.push(data);
    });

  }

}
