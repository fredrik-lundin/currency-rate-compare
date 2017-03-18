import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '../../shared/services/currency-service.service';

import { CurrencyRate } from '../../shared/models/currency-rate.model';
import { CustomAmount } from '../../shared/models/custom-amount.model';

@Component({
  selector: 'crc-currency-rate-comparer',
  template: `
    <h1>Currency rates</h1>
    <button (click)="onCurrencyChanged(currencyData.target, currencyData.source)">Switch</button>
    <crc-currency-rate-display [currencyData]="currencyData"></crc-currency-rate-display>
    <crc-custom-amount 
        [customAmount]="customAmount"
        (customAmountChanged)="onCustomAmountChanged($event.customAmount, $event.sourceAmountChanged)">
    </crc-custom-amount>
  `,
  styleUrls: ['./currency-rate-comparer.component.scss']
})
export class CurrencyRateComparerComponent implements OnInit {
  public currencyData: CurrencyRate;
  public customAmount: CustomAmount;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.onCurrencyChanged('nok', 'sek');
  }

  setCurrencyData (data: CurrencyRate): void {
    this.currencyData = data;
    this.customAmount = this.currencyService.calculateCustomAmount(this.customAmount, true, this.currencyData.rate);
  }

  onCurrencyChanged(source: string, target: string): void {
    this.currencyService.getCurrencyData(source, target).subscribe(
      data => this.setCurrencyData(data),
      err => console.error(err));
  }

  onCustomAmountChanged(customAmount: CustomAmount, sourceChanged: boolean = true): void {
    this.customAmount = this.currencyService.calculateCustomAmount(customAmount, sourceChanged, this.currencyData.rate);
  }
}
