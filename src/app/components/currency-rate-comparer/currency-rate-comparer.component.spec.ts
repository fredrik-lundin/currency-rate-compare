import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateComparerComponent } from './currency-rate-comparer.component';

describe('CurrencyRateComparerComponent', () => {
  let component: CurrencyRateComparerComponent;
  let fixture: ComponentFixture<CurrencyRateComparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyRateComparerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
