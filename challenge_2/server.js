const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.urlencoded({
  extended: true
}))

app.get('/submit-form', (req, res) => {
  console.log('connected to server!');

  res.sendFile(path.join(__dirname + '/client/index.html'));
})

app.post('/submit-form', (req, res) => {
  console.log('submit req: ', req.body);
  //what the client inputted into form is the req.body.text
  //res.end();
})

app.listen(port, () => {
  console.log('App is listening on port: ', port);
})



