var express = require('express');
var app = express();
//const http = require('http');
app.use(express.static('public'));

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  app.use(express.static('public'))
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});