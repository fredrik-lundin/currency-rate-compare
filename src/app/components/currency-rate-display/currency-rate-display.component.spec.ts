import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateDisplayComponent } from './currency-rate-display.component';
import { AppModule } from '../../app.module';

describe('CurrencyRateDisplayComponent', () => {
  let component: CurrencyRateDisplayComponent;
  let fixture: ComponentFixture<CurrencyRateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CurrencyRateDisplayComponent wihtout errors', () => {
    expect(component).toBeTruthy();
  });
});
