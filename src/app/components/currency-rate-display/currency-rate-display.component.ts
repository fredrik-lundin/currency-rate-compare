import { Component, Input } from '@angular/core';
import { CurrencyRate } from '../../shared/models/currency-rate.model';

@Component({
  selector: 'crc-currency-rate-display',
  templateUrl: './currency-rate-display.component.html',
  styleUrls: ['./currency-rate-display.component.scss']
})
export class CurrencyRateDisplayComponent {
  @Input('currencyData') currencyData: CurrencyRate;
}
