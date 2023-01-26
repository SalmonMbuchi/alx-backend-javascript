export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // getter methods
  get sqft() {
    return this._sqft;
  }
}
