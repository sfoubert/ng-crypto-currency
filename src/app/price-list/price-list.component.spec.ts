import {LineChartComponent} from '../line-chart/line-chart.component';
import {ChartComponent} from '../chart/chart.component';
import { PriceComponent } from '../price/price.component';
import { CoinService } from '../coin-list/coin.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListComponent } from './price-list.component';

describe('PriceListComponent', () => {
  let component: PriceListComponent;
  let fixture: ComponentFixture<PriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PriceListComponent,
        PriceComponent,
        ChartComponent,
        LineChartComponent,
      ],
      providers: [ CoinService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
