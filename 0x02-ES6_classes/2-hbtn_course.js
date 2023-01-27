export default class HolbertonCourse {
  constructor(name, length, students) {
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
  set name(name) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(students) {
    if (!Array.isArray(students) || students.every((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
