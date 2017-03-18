import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CustomAmount } from '../models/custom-amount.model';
import { CurrencyService } from './currency-service.service';

describe('CurrencyServiceService - calculateCustomAmount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CurrencyService]
    });
  });

  it('should calculate correctly when source changed', inject([CurrencyService], (service: CurrencyService) => {
    const oldCustomAmount: CustomAmount = {
      sourceAmount: 10,
      targetAmount: 10
    };
    const expected: CustomAmount = {
      sourceAmount: 10,
      targetAmount: 15
    };
    const actual = service.calculateCustomAmount(oldCustomAmount, true, 1.5);

    expect(expected).toEqual(actual);
  }));

  it('should calculate correctly when target changed', inject([CurrencyService], (service: CurrencyService) => {
    const oldCustomAmount: CustomAmount = {
      sourceAmount: 15,
      targetAmount: 15
    };
    const expected: CustomAmount = {
      sourceAmount: 10,
      targetAmount: 15
    };
    const actual = service.calculateCustomAmount(oldCustomAmount, false, 1.5);

    expect(expected).toEqual(actual);
  }));
});
