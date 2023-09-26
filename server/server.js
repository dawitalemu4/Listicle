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

/*
im using aws rds postgresql and im making my queries through the vs code extension called postgresql from microsoft. I already sucessfuly set up my table and double checked it. Here is my express.js code: const express = require('express');
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

here is what is in my .env file: DB="postgres://postgres:ab7851370b4adff1037573bb9a1bfcad99bc1bd545fb4b2b8b28b065c4f62508@listicledb.cqdn0giyois1.us-east-1.rds.amazonaws.com:5432/postgres"

error: 2023-09-26 19:13:47 UTC:204.62.51.153(50991):postgres@postgres:[13872]:FATAL: no pg_hba.conf entry for host "204.62.51.153", user "postgres", database "postgres", no encryption 
*/