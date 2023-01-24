export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      let count = 0;
      const size = Object.keys(employeesList).length;
      for (let i = 0; i < size; i += 1) {
        count += 1;
      }
      return count;
    },
  };
  return obj;
}
