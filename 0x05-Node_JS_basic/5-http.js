const http = require('http');
const fs = require('fs');

const db = process.argv[2] === undefined ? 'database.csv' : process.argv[2];
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const body = ['This is the list of our students'];
    fs.readFile(db, 'utf-8', (error, data) => {
      if (!error) {
        let students = data.split('\n');
        students = students.slice(1, students.length - 1);
        const courses = new Map();

        // Parse CSV data creating a map of courseData objects.
        students.forEach((student) => {
          const studentData = student.split(',');
          const firstName = studentData[0];
          const field = studentData[3];
          if (courses.has(field)) {
            courses.get(field).students.push(firstName);
            courses.get(field).count += 1;
          } else {
            courses.set(field, { students: [firstName], count: 1 });
          }
        });

        // Organize data in an array
        body.push(`Number of students: ${students.length}`);
        courses.forEach((courseData, course) => {
          body.push(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
        });
      }
      res.end(body.join('\n'));
    });
  }
});

app.listen(port, hostname);

module.exports = app;
