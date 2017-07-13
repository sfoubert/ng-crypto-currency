import { CoinService } from './coin.service';
import { HttpModule } from '@angular/http';
import { CryptoCompareService } from '../crypto-compare/crypto-compare.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinListComponent } from './coin-list.component';
import { FormsModule } from '@angular/forms';


describe('CoinListComponent', () => {
  let component: CoinListComponent;
  let fixture: ComponentFixture<CoinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, FormsModule ],
      declarations: [ CoinListComponent ],
      providers: [ CryptoCompareService, CoinService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
