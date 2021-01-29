const https = require('https');
var data =
{
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [
  {
    "firstName": "Beth Jr.",
    "lastName": "Johnson",
    "county": "San Mateo",
    "city": "Pacifica",
    "role": "Manager",
    "sales": 2900000,
    "children": [
      {
        "firstName": "Smitty",
        "lastName": "Won",
        "county": "San Mateo",
        "city": "Redwood City",
        "role": "Sales Person",
        "sales": 4800000,
        "children": []
      },
      {
        "firstName": "Allen",
        "lastName": "Price",
        "county": "San Mateo",
        "city": "Burlingame",
        "role": "Sales Person",
        "sales": 2500000,
        "children": []
      }
    ]
  },
  {
    "firstName": "Beth",
    "lastName": "Johnson",
    "county": "San Francisco",
    "city": "San Francisco",
    "role": "Broker/Sales Person",
    "sales": 7500000,
    "children": []
  }
]
};

// /*
// - event listener on submit button click
//   --> trigger POST request
// */

console.log('data: ', data);

var submitPostRequest = (event) => {
  //
  //const data =
  console.log('event: ', event);
  const options = {
    hostname: 'localhost',
    port: 5500,
    path: '/submit',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }
  console.log('options: ', options);

  const req = https.request(options, res => {
    console.log(`status code: , ${res.statusCode}`);
  })

  req.on('error', error =? {
    console.error(error);
  })

  req.on('data', chunk => {
    console.log(`chunk available: , ${chunk}`);
  })

  req.write(data);
  req.end;
}

document.querySelector('.submit').addEventListener('click', submitPostRequest);