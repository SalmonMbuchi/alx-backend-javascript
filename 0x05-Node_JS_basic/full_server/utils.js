const fs = require('fs');

module.exports = function readDatabase(dbPath) {
  const students = {};
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (err, data) => {
      if (!err) {
        let lines = data.split('\n');
        lines = lines.slice(1);
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            const line = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, line[3])) {
              students[line[3]].push(line[0]);
            } else {
              students[line[3]] = [line[0]];
            }
          }
        }
        resolve(students);
      } else {
        reject(err);
      }
    });
  });
};
