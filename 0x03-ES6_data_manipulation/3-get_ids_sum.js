export default function getStudentIdsSum(students) {
  const ids = students.map((student) => student.id);
  return ids.reduce((id1, id2) => id1 + id2);
}
