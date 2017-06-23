import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'crc-switch-currency-button',
  template: `
      <div class="switch-button-wrapper">
        <button (click)="currencyChanged.next()">
          <i class="fa fa-exchange switch-button-icon" aria-hidden="true"></i>
        </button>
      </div>
  `,
  styleUrls: ['./switch-currency-button.component.scss']
})
export class SwitchCurrencyButtonComponent {
  @Output('currencyChanged') currencyChanged = new EventEmitter();
}
