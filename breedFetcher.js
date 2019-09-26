const request = require('request');
const API_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const query = process.argv[2];

request(API_URL + query, (err, response, body) => {
  if (err) {
    console.log('ERROR! Request failed:');
    console.log(err);
    return;
  }

  const data = JSON.parse(body);
  if (data.length > 0) {
    console.log(data[0].description);
  } else {
    console.log(`Search for "${query}" returned no results.`);
  }
});
