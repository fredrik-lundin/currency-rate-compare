import { CustomAmount } from '../models/custom-amount.model';

export class CustomAmountChangedEvent {
    customAmount: CustomAmount;
    sourceAmountChanged: boolean;
}
