import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../../app.module';
import { CurrencyRateComparerComponent } from './currency-rate-comparer.component';

describe('CurrencyRateComparerComponent', () => {
  let component: CurrencyRateComparerComponent;
  let fixture: ComponentFixture<CurrencyRateComparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CurrencyRateComparerComponent wihtout errors', () => {
    expect(component).toBeFalsy();
  });
});
