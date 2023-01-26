export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter methods
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // setter methods
  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
