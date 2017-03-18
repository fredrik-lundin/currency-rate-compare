import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateDisplayComponent } from './currency-rate-display.component';

describe('CurrencyRateDisplayComponent', () => {
  let component: CurrencyRateDisplayComponent;
  let fixture: ComponentFixture<CurrencyRateDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyRateDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
