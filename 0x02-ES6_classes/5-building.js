export default class Building {
  constructor(sqft) {
    if (new.target !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evatuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // getter methods
  get sqft() {
    return this._sqft;
  }
}
