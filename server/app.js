const express = require('express');
const pgp = require('pg-promise')();
const server = express();
require('dotenv').config();
const port = 4001;
const db = pgp(process.env.DB)

server.get('/', function(req, res) {
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