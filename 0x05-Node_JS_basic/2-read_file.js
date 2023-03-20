const fs = require('fs');

function countStudents(path) {
  const stream = fs.createReadStream(path, 'utf-8');

  stream.on('error', (error) => {
    console.log('Cannot load the database');
  });

  stream.on('data', (data) => {
    console.log('Number of students: ');
  });
}

module.exports = countStudents;
