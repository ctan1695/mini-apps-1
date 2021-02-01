const express = require('express');
const path = require('path');
const port = 5500;
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: path.join(__dirname, 'uploads/')});
const fs = require('fs');
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static('client'));

app.get('/', (req, res) => {
  res.render('index', {inputtedText: '', lines: []});
})

app.post('/submit-form', upload.any(), (req, res) => {
  var uploadsPath = path.join(__dirname, 'uploads');
  var fileName;
  var filePath;
  var parsedFileContents;
  var columnHeaders;
  var csvReport = [];

  fs.promises.readdir(uploadsPath, 'utf8')
    .then((files) => {
      files.forEach((file) => {
        fileName = file;
        filePath = path.join(uploadsPath, fileName);
        var parsedFileContents = fs.readFileSync(filePath);
        parsedFileContents = JSON.parse(parsedFileContents);
        columnHeaders = Object.keys(parsedFileContents);
        columnHeaders.pop();
        csvReport.push(columnHeaders.toString());

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

        convertToCSV(parsedFileContents);
        ;
      })
    })
    .then(() => {
      res.render('index', {inputtedText: req.body.text, lines: csvReport})
    })
    .catch((err) => {
      console.log('err: ', err);
    })
})

app.listen(port, () => {
  console.log('App is listening on port: ', port);
})