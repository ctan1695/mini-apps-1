const express = require('express');
const path = require('path');
const port = 5500;
// const partials = require('express-partials');
const bodyParser = require('body-parser');
const app = express();

app.set('views', `${__dirname}`);
app.set('view engine', 'ejs');

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
// app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
})

app.post('/submit-form', (req, res) => {
  var reqJSON = JSON.parse(req.body.text);
  var columnHeaders = Object.keys(reqJSON);
  var csvReport = [];

  columnHeaders.pop();
  csvReport.push(columnHeaders.toString());

  //recursive function to loop through json
  var convertToCSV = function (item) {

    var textLine = '';
    for (var keys in item) {
      if (keys !== 'children') {
        textLine += item[keys].toString();

        if (keys !== 'sales') {
          textLine += ',';
        }
      }

    }

    csvReport.push(textLine);

    if (item.children.length !== 0) {
      for (var i = 0; i < item.children.length; i++) {
        convertToCSV(item.children[i]);
      }
    } else {
      return;
    }

  }

  convertToCSV(reqJSON);
  //send the html + new div with my csv report.

  //clientSide.displayResults(csvReport);
 // res.send(csvReport);
  res.render('result', {inputtedText: req.body.text, lines: csvReport});
  //res.sendFile(path.join(__dirname + '/client/index.html'));

})

app.listen(port, () => {
  console.log('App is listening on port: ', port);
})