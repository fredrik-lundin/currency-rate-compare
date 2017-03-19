import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import { CurrencyRates } from '../models/currency-rates.model';
import { CurrencyRate } from '../models/currency-rate.model';
import { CustomAmount } from '../models/custom-amount.model';

@Injectable()
export class CurrencyService {
  private readonly URL_LATEST = 'https://api.fixer.io/latest';

  constructor(private http: Http) { }

  getCurrencyData(source: string, target: string): Observable<CurrencyRates> {
    source = source.toUpperCase();
    target = target.toUpperCase();

    const params: URLSearchParams = new URLSearchParams();
    params.set('base', source);
    params.set('symbols', target);

    return this.http.get(this.URL_LATEST, { search: params })
      .map(response => response.json())
      .map(currency => {
        return {
          source: {
            code: source,
            rate: 1
          },
          target: {
            code: target,
            rate: currency.rates[target]
          }
        };
      });
  }

  calculateCustomAmount(newAmount: number, sourceChanged: boolean, rate: number): CustomAmount {
    return sourceChanged ?
      {
        sourceAmount: newAmount,
        targetAmount: newAmount * rate
      }
      :
      {
        sourceAmount: newAmount / rate,
        targetAmount: newAmount
      };
  }
}
