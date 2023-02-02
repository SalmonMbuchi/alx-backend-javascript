interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
// Create classes
class Director implements DirectorInterface {
  getCoffeeBreak() {
    return ('Getting a coffee break');
  }
  workDirectorTasks() {
    return ('Getting to director tasks');
  }
  workFromHome() {
    return 'Working from home';
  }
}
class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}
// Create a function
function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) return new Teacher;
  return new Director;
}
function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}
// String literal types
type Subjects = "Math" | "History";
function teachClass(todayClass: string) {
  if (todayClass === "Math") return 'Teaching Math';
  return 'Teaching History';
}