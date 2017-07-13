import { CoinService } from './coin-list/coin.service';
import { CryptoCompareService} from './crypto-compare/crypto-compare.service';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartComponent } from './chart/chart.component';
import { PriceComponent } from './price/price.component';
import { HttpModule } from '@angular/http';
import { PriceListComponent } from './price-list/price-list.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, FormsModule ],
      declarations: [
        AppComponent,
        CoinListComponent,
        PriceListComponent,
        PriceComponent,
        ChartComponent,
        LineChartComponent,
      ],
      providers: [ CryptoCompareService, CoinService ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Crypto Currency');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Dashboard');
  }));
});
