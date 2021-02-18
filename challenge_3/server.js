const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/database.js');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.post('/checkout', (req, res) => {
  db.queryAsync(`INSERT INTO orders (item) VALUES ('${req.body.item}')`)
    .then((result) => {
      return db.queryAsync(`SELECT LAST_INSERT_ID()`)
    }
    )
    .then((last_inserted_id) => {
      res.send(last_inserted_id);
    })
    .catch((err) => {
      console.log('Error inserting into orders table: ', err);
    })

  //For primary key just inserted, send back to client in response.
  // res.send('done');
})

app.post('/name', (req, res) => {
  console.log('/name req.body: ', req.body);
  var userInput = req.body;
  //Insert into DB for inputted values with user_id = inputted user id.
  db.queryAsync(`INSERT INTO customers (name, email, password, order_id) values ('${userInput.name}', '${userInput.email}', '${userInput.password}', ${userInput.orderID})`)
    .then(() => {
      res.end();
    })
    .catch((err) => {
      console.log('Error inserting into customers table: ', err);
    })

})


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})