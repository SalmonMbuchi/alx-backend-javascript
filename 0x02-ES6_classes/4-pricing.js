import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(amount, currency);
    this._amount = amount;
    this._currency = currency;
  }

  // getter methods
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setter methods
  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  // Methods
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // return `${this._amount} ${this._currency}`;
}
