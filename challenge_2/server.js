const express = require('express');
const path = require('path');

const app = express();
const port = 5500;


/*
- event listener on submit button click
  --> trigger POST request
*/


app.get('/', (req, res) => {
  console.log('connected to server!');
  //console.log('req: ', req);
  res.sendFile(path.join(__dirname + '/client/index.html'));
})

app.post('/submit', (req, res) => {
  console.log('submit req: ', req.body);
})

app.listen(port, () => {
  console.log('App is listening on port: ', port);
})



