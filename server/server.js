const express = require('express');
const pgp = require('pg-promise')();
const server = express();
require('dotenv').config();
const port = 4001;

const connection = {  
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD
};
console.log(connection);
const db = pgp(connection)

server.get('/', function(req, res) {
  res.json("Dawit's listicle server");
});

server.get('/characters', function(req, res) {
  db.one('SELECT * FROM character')
  .then(data => {res.json(data)})
  .catch(error => {console.log(error)});
});

server.get('/character/:id', function(req, res) {
  const id = parseInt(req.params.id);
  if (id > 0 && id < 6) {
  db.one(`SELECT ${id} FROM character`)
  .then(data => {res.json(data)})
  .catch(error => {console.log(error)});
  } else {
    console.error('Character not found');
  }
});

server.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});