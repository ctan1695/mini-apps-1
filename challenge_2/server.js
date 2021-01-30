const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json());

app.get('/', (req, res) => {
  console.log('connected to server!');

  res.sendFile(path.join(__dirname + '/client/index.html'));
})

app.post('/submit-form', (req, res) => {
  var reqJSON = JSON.parse(req.body.text);
  var columnHeaders = Object.keys(reqJSON);
  columnHeaders.pop();
  var csvReport = columnHeaders.toString();


  res.send(csvReport);

  //recursive function to loop through json
  // var convertToCSV = function (item) {
  //   if (item.children.length === 0) {
  //     return;
  //   }

  //   for (var i = 0; i < item.children.length; i++) {
  //     convertToCSV(item.children[i]);
  //   }
  // }

  // convertToCSV(reqJSON);


  //res.sendFile(path.join(__dirname + '/client/index.html'));
})

app.listen(port, () => {
  console.log('App is listening on port: ', port);
})



