// Main server file

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

require('dotenv').config();

app.use(cors());

app.use(express.static(path.join(__dirname, '/')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});


const port = process.env.Port || 3000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
