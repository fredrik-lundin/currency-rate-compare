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

  describe('getCurrencyData', () => {
    it('should receive and map some data from the api', async(inject([CurrencyService], (service: CurrencyService) => {
        service.getCurrencyData('NOK', 'SEK').subscribe(
          res => {
            expect(res.rate).toEqual(jasmine.any(Number));
            expect(res.source).toEqual('NOK');
            expect(res.target).toEqual('SEK');
          }
        );
      })));
  });
});
