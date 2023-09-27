const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')();
const server = express();
require('dotenv').config();
const port = 4001;

const connection = {  
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: { rejectUnauthorized : false }
};
const db = pgp(connection);

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = 'https://listicle.onrender.com';
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

server.use(cors(corsOptions));

server.get('/', function(req, res) {
  res.json("Dawit's listicle server");
});

server.get('/characters', function(req, res) {
  db.manyOrNone('SELECT * FROM character')
  .then(data => {res.json(data)
  console.log(data)})
  .catch(error => {console.log(error)});
});

server.get('/character/:id', function(req, res) {
  const id = parseInt(req.params.id);
  if (id > 0 && id < 6) {
  db.one(`SELECT * FROM character WHERE id = ${id}`)
  .then(data => {res.json(data)})
  .catch(error => {console.log(error)});
  } else {
    console.error('Character not found');
  }
});

server.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});