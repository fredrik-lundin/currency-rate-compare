import { CurrencyRateComparePage } from './app.po';

describe('currency-rate-compare App', () => {
  let page: CurrencyRateComparePage;

  beforeEach(() => {
    page = new CurrencyRateComparePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
