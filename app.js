const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/character/:id', function(req, res) {
  const id = parseInt(req.params.id);
  if (id > 0 && id < 6) {
    res.sendFile(path.join(__dirname, 'public', 'character.html'));
  } else {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
  }
});

app.get('*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
});