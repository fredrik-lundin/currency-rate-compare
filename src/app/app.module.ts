import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './core/app.component';
import { CurrencyRateComparerComponent } from './components/currency-rate-comparer/currency-rate-comparer.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyRateComparerComponent
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
