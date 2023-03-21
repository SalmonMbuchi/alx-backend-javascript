const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.end('This is the list of our students\nNumber of students: 10\nNumber of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\nNumber of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
      break;
    default:
      res.statusCode(404);
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
});

app.listen(port, hostname);

module.exports = app;
