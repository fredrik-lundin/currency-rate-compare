import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyRate } from '../../shared/models/currency-rate.model';

@Component({
  selector: 'crc-currency-card',
  template: `
    <section class="card">
      <header>{{currencyData?.code}} <span>({{currencyData?.rate}})</span></header>
      
      <input type="number" [(ngModel)]="customAmount" (ngModelChange)="onCustomAmountChanged()" />
    </section>
  `,
  styleUrls: ['./currency-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyCardComponent {
  @Input('currencyData') currencyData: CurrencyRate;
  @Input('customAmount') customAmount: number;
  @Output('customAmountChanged') customAmountChanged = new EventEmitter<number>();

  /*
    The ngModelChange event gets called twice when using type=number for some reason.
    Both when the value change, and when the focus is lost (blur) on the field (that happens right away if
      the value is changed via the clicking the up/down buttons on the input field)

    Ask about this on gitter, waiting for feedback
  */
  // TODO: Fix event called twice (see comment above)
  onCustomAmountChanged() {
    this.customAmountChanged.emit(this.customAmount);
  }

}
