import { HttpModule} from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { CryptoCompareService } from './crypto-compare.service';

describe('CryptoCompareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CryptoCompareService]
    });
  });

  it('should be created', inject([CryptoCompareService], (service: CryptoCompareService) => {
    expect(service).toBeTruthy();
  }));
});
