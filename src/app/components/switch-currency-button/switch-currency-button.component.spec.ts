import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCurrencyButtonComponent } from './switch-currency-button.component';

describe('SwitchCurrencyButtonComponent', () => {
  let component: SwitchCurrencyButtonComponent;
  let fixture: ComponentFixture<SwitchCurrencyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchCurrencyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCurrencyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
