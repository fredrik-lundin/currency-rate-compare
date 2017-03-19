import { CurrencyRate } from '../models/currency-rate.model';
import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CustomAmount } from '../models/custom-amount.model';
import { CurrencyService } from './currency-service.service';

describe('CurrencyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CurrencyService]
    });
  });

  describe('calculateCustomAmount', () => {
    it('should calculate correctly when source changed', inject([CurrencyService], (service: CurrencyService) => {
      const expected: CustomAmount = {
        sourceAmount: 10,
        targetAmount: 15
      };
      const actual = service.calculateCustomAmount(10, true, 1.5);

      expect(expected).toEqual(actual);
    }));

    it('should calculate correctly when target changed', inject([CurrencyService], (service: CurrencyService) => {
      const expected: CustomAmount = {
        sourceAmount: 10,
        targetAmount: 15
      };
      const actual = service.calculateCustomAmount(15, false, 1.5);

      expect(expected).toEqual(actual);
    }));
  });

  describe('getCurrencyData', () => {
    it('should receive and map some data from the api on: api.fixer.io', async(inject([CurrencyService], (service: CurrencyService) => {
      service.getCurrencyData('NOK', 'SEK').subscribe(
        res => {
          expect(res.source.rate).toEqual(jasmine.any(Number));
          expect(res.target.rate).toEqual(jasmine.any(Number));
          expect(res.source.code).toEqual('NOK');
          expect(res.target.code).toEqual('SEK');
        }
      );
    })));
  });
});
