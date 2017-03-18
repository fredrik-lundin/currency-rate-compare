import { CurrencyCountry } from './currency-country.model';

export class CurrencyRate {
    source: CurrencyCountry;
    target: CurrencyCountry;
    rate: number;
}
