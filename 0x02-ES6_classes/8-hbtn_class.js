export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Converts the this value to an object
  // Called in priority by numeric conversion and primitive conversion
  valueOf() {
    return this._size;
  }

  // Used for string conversion(priority first)
  toString() {
    return this._location;
  }
}
