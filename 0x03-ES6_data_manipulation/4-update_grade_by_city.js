export default function updateStudentGradeByCity(students, city, newGrades) {
  const cities = students.filter((student) => student.location === city);
  // const studentId = cities.filter((student) => student.id === newGrades.studentId);
  const res = cities.map((student) => {
    if (student.id === newGrades.studentId) {
      try {
        student.grade = newGrades.grade;
      } catch (e) {
        student.grade = 'N/A';
      }
    }
  });

  return res;
}
