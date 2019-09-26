const request = require('request');
const API_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const query = process.argv[2];

request(API_URL + query, (err, response, body) => {
  const data = JSON.parse(body);
  console.log(data[0].description);
});
