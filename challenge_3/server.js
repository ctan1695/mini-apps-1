
/*
- require Express
- require body parser

- use url encoder
- serve up index.html with 'use'

- GET router

- POST router
*/

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listing on port: ${port}`);
})