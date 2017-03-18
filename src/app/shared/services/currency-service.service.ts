import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';

import { CurrencyRate } from '../models/currency-rate.model';
import { CustomAmount } from '../models/custom-amount.model';

@Injectable()
export class CurrencyService {
  private readonly URL_LATEST = 'http://api.fixer.io/latest';

  constructor(private http: Http) { }

  getCurrencyData(source: string, target: string): Observable<CurrencyRate> {
    source = source.toUpperCase();
    target = target.toUpperCase();

    const params: URLSearchParams = new URLSearchParams();
    params.set('base', source);
    params.set('symbols', target);

    return this.http.get(this.URL_LATEST, { search: params })
      .map(response => response.json())
      .map(currency => {
        return {
          rate: currency.rates[target],
          source: source,
          target: target
        };
      });

    // return Observable.from([{
    //   rate: 1.0394,
    //   source: 'NOK',
    //   target: 'SEK',
    // }]);
  }

  calculateCustomAmount(oldCustomAmount: CustomAmount, sourceChanged: boolean, rate: number): CustomAmount {
    if (!oldCustomAmount) {
      oldCustomAmount = { sourceAmount: 10, targetAmount: 10 };
    }

    return sourceChanged ?
      {
        sourceAmount: oldCustomAmount.sourceAmount,
        targetAmount: oldCustomAmount.sourceAmount * rate
      }
      :
      {
        sourceAmount: oldCustomAmount.targetAmount / rate,
        targetAmount: oldCustomAmount.targetAmount
      };
  }
}
