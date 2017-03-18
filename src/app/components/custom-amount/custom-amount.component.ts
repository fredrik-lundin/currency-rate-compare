import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CustomAmount } from '../../shared/models/custom-amount.model';
import { CustomAmountChangedEvent } from '../../shared/event-types/custom-amount-changed.event';

@Component({
  selector: 'crc-custom-amount',
  template: `
    <section *ngIf="customAmount">
      <input type="number" [(ngModel)]="customAmount.sourceAmount" (ngModelChange)="onCustomAmountChanged(true)" />
      <input type="number" [(ngModel)]="customAmount.targetAmount" (ngModelChange)="onCustomAmountChanged(false)" />
    </section>
  `,
  styleUrls: ['./custom-amount.component.scss']
})
export class CustomAmountComponent {
  @Input('customAmount') customAmount: CustomAmount;
  @Output('customAmountChanged') customAmountChanged = new EventEmitter<CustomAmountChangedEvent>();

  /*
    The ngModelChange event gets called twice when using type=number for some reason.
    Both when the value change, and when the focus is lost (blur) on the field (that happens right away if
      the value is changed via the clicking the up/down buttons on the input field)

    Ask about this on gitter, waiting for feedback
  */
  // TODO: Fix event called twice (see comment above)
  onCustomAmountChanged(sourceAmountChanged) {
    this.customAmountChanged.emit({
      customAmount: this.customAmount,
      sourceAmountChanged: sourceAmountChanged
    });
  }
}
