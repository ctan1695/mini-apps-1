const https = require('https');

module.exports.displayResults = (results) => {
  var node = document.createTextNode(results);
  document.getElementbyTagName('body').appendChild(node);
}

