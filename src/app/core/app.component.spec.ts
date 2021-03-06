import { AppModule } from '../app.module';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CurrencyRateComparerComponent } from '../components/currency-rate-comparer/currency-rate-comparer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  it('should create the AppComponent wihtout errors', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
