import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyRate } from '../../shared/models/currency-rate.model';

@Component({
  selector: 'crc-currency-rate-display',
  template: `
    <section>
      <h2>{{currencyData?.source}}</h2>
      <p>1</p>
    </section>
    <section>
      <h2>{{currencyData?.target}}</h2>
      <p>{{currencyData?.rate}}</p>
    </section>
  `,
  styleUrls: ['./currency-rate-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyRateDisplayComponent {
  @Input('currencyData') currencyData: CurrencyRate;
}
