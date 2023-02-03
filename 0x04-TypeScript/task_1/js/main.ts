interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
interface Directors extends Teacher {
  numberOfReports: number;
}
// Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
let printTeacher: printTeacherFunction;

printTeacher = function(firstName: string, lastName: string): string {
  let res = firstName[0] + '. ' + lastName;
  return res;
}
// Writing a class
interface ClassConstructor {
  new (firstName: string, lastName: string): ClassInterface;
}
interface ClassInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements ClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.lastName;
  }
}