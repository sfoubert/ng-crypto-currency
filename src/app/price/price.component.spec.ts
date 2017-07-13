import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CryptoCompareService } from '../crypto-compare/crypto-compare.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent } from './price.component';

describe('PriceComponent', () => {
  let component: PriceComponent;
  let fixture: ComponentFixture<PriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, BrowserAnimationsModule],
      declarations: [ PriceComponent ],
      providers: [ CryptoCompareService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
