import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CurrencyService } from '../../shared/services/currency-service.service';

import { CurrencyRate } from '../../shared/models/currency-rate.model';
import { CustomAmount } from '../../shared/models/custom-amount.model';

@Component({
  selector: 'crc-currency-rate-comparer',
  template: `
    <h1>Currency rates</h1>
    <crc-currency-rate-display [currencyData]="currencyData"></crc-currency-rate-display>
    <crc-custom-amount 
        [customAmount]="customAmount"
        (customAmountChanged)="onCustomAmountChanged($event.customAmount, $event.sourceAmountChanged)">
    </crc-custom-amount>
  `,
  styleUrls: ['./currency-rate-comparer.component.scss']
})
export class CurrencyRateComparerComponent implements OnInit {
  public currencyDataSub$: Observable<CurrencyRate>;
  public currencyData: CurrencyRate;
  public customAmount: CustomAmount;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyDataSub$ = this.currencyService.getCurrencyData('nok', 'sek');
    this.currencyDataSub$.subscribe(
      data => this.setCurrencyData(data),
      err => console.error(err));
  }

  setCurrencyData (data: CurrencyRate): void {
    this.currencyData = data;
    this.customAmount = this.currencyService.calculateCustomAmount(this.customAmount, true, this.currencyData.rate);
  }

  onCurrencyChanged(source: string, target: string): void {
    this.currencyDataSub$ = this.currencyService.getCurrencyData(source, target);
  }

  onCustomAmountChanged(customAmount: CustomAmount, sourceChanged: boolean = true): void {
    this.customAmount = this.currencyService.calculateCustomAmount(customAmount, sourceChanged, this.currencyData.rate);
  }
}
