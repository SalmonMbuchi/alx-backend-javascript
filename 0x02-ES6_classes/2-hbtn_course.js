export default class HolbertonCourse {
  constructor(name, length, students) {
    // if (!(name instanceof String)) {
    //   throw new TypeError('Name must be a string');
    // }
    // if (students !== 'string') {
    //   throw TypeError('Students must be a string');
    // }
    // if (length !== 'number') {
    //   throw new TypeError('Length must be a number');
    // }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter methods
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setter methods
  set name(value) {
    this._name = value;
  }

  set length(value) {
    this._length = value;
  }

  set students(value) {
    this._students = value;
  }
}
