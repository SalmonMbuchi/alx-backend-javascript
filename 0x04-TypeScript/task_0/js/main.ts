interface Student {
  firstName: string;
  lastName: string;
  location: string;
}

const studentOne: Student = {
  firstName: "John",
  lastName: "Doe",
  location: "Nairobi"
}
const studentTwo: Student = {
  firstName: "Harry",
  lastName: "Potter",
  location: "Hogwarts"
}
let studentsList: object[] = [studentOne, studentTwo];
// Generate table head
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let table = document.querySelector("table");
let data = Object.keys(studentsList);
generateTableHead(table, data);