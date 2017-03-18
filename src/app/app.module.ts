import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './core/app.component';
import { CurrencyRateComparerComponent } from './components/currency-rate-comparer/currency-rate-comparer.component';
import { CurrencyRateDisplayComponent } from './components/currency-rate-display/currency-rate-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyRateComparerComponent,
    CurrencyRateDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
