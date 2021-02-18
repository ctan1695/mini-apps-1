const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/checkout', (req, res) => {
  //Insert into DB (orders table)
  //For primary key just inserted, send back to client in response.
  res.send('done');
})

app.post('/name', (req, res) => {
  console.log('req.body: ', req.body);
  //Insert into DB for inputted values with user_id = inputted user id.
  res.send('done');
})


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})