export default function updateStudentGradeByCity(students, city, newGrades) {
  const cities = students.filter((student) => student.location === city);
  // eslint-disable-next-line array-callback-return, consistent-return
  const res = cities.map((student) => {
    if (student.id === newGrades.studentId) {
      try {
        return {
          ...student,
          grade: newGrades.grade,
        };
      } catch (e) {
        return {
          ...student,
          grade: 'N/A',
        };
      }
    }
  });
  return res;
}
