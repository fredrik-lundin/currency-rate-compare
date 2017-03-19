import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './core/app.component';
import { CurrencyRateComparerComponent } from './components/currency-rate-comparer/currency-rate-comparer.component';

import { CurrencyService } from './shared/services/currency-service.service';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyRateComparerComponent,
    CurrencyCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
