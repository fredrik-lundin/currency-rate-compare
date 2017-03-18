import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CurrencyService } from './currency-service.service';

describe('CurrencyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CurrencyService]
    });
  });

  it('should ...', inject([CurrencyService], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
