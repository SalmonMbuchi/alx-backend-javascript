export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Returns a new object of the class
  cloneCar() {
    static get [Symbol.species]() { return this };
  }
}
