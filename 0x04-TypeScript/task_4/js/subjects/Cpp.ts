namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  // A class
  export class Cpp extends Subject {
    getRequirements() {
      return 'Here is the lists of requirements for Cpp';
  }
    getAvailableTeacher() {
      if (this.teacher.experienceTeachingC > 0) {
        return 'Available Teacher: ${this.teacher.firstName}'
      }
      return `No available teacher`;
    }
}
}