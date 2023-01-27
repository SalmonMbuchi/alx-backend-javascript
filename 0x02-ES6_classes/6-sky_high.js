import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft, floors);
    super._sqft = sqft;
    this._floors = floors;
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  // Method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
