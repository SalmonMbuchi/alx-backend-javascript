export default function updateStudentGradeByCity(students, city, newGrades) {
  const cities = students.filter((student) => student.location === city);
  const studentId = cities.filter((student) => student.id === newGrades.studentId);
  const res = studentId.map((student) => student.grade = newGrades.grade);

  return res;
}
