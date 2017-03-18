import { Component, OnInit } from '@angular/core';
import { CurrencyRate } from '../../shared/models/currency-rate.model';

@Component({
  selector: 'crc-currency-rate-comparer',
  templateUrl: './currency-rate-comparer.component.html',
  styleUrls: ['./currency-rate-comparer.component.scss']
})
export class CurrencyRateComparerComponent implements OnInit {
  public currencyData: CurrencyRate;

  constructor() { }

  ngOnInit() {
    this.currencyData = {
      rate: 0.96,
      source: {
        code: 'NOK',
        amount: 100
      },
      target: {
        code: 'SEK',
        amount: 100 * 1.15
      }
    };
  }

}
