import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '../../shared/services/currency-service.service';

import { CurrencyRates } from '../../shared/models/currency-rates.model';
import { CustomAmount } from '../../shared/models/custom-amount.model';

@Component({
  selector: 'crc-currency-rate-comparer',
  template: `
  <main>
      <h1>Currency rates</h1>
      <crc-currency-card 
        [currencyData]="currencyRates?.source"
        [customAmount]="customAmount?.sourceAmount"
        (customAmountChanged)="onCustomAmountChanged($event, true)">
      </crc-currency-card>

      <div class="switch-button-wrapper">
        <button (click)="onCurrencyChanged(currencyRates.target.code, currencyRates.source.code)">
          <i class="fa fa-exchange swtich-button-icon" aria-hidden="true"></i>
        </button>
      </div>

      <crc-currency-card 
        [currencyData]="currencyRates?.target"
        [customAmount]="customAmount?.targetAmount"
        (customAmountChanged)="onCustomAmountChanged($event, false)">
      </crc-currency-card>
    </main>
  `,
  styleUrls: ['./currency-rate-comparer.component.scss']
})
export class CurrencyRateComparerComponent implements OnInit {
  public currencyRates: CurrencyRates;
  public customAmount: CustomAmount;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.customAmount = { sourceAmount: 10, targetAmount: 10 };
    this.onCurrencyChanged('nok', 'sek');
  }

  setCurrencyData(data: CurrencyRates): void {
    this.currencyRates = data;
    this.customAmount = this.currencyService.calculateCustomAmount(this.customAmount.sourceAmount, true, this.currencyRates.target.rate);
  }

  onCurrencyChanged(source: string, target: string): void {
    this.currencyService.getCurrencyData(source, target).subscribe(
      data => this.setCurrencyData(data),
      err => console.error(err));
  }

  onCustomAmountChanged(customAmount: number, sourceChanged: boolean = true): void {
    this.customAmount = this.currencyService.calculateCustomAmount(customAmount, sourceChanged, this.currencyRates.target.rate);
  }
}
