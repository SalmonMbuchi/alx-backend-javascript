export default function updateStudentGradeByCity(students, city, newGrades) {
  const cities = students.filter((student) => student.location === city);
  const res = cities.map((student) => {
    if (student.id === newGrades.studentId) {
      try {
        cities.grade = newGrades.grade;
      } catch (e) {
        cities.grade = 'N/A';
      }
    }
  });
  return res;
}
