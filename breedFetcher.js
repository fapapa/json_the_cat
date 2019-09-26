const request = require('request');
const API_URL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = (query, complete) => {
  request(API_URL + query, (err, response, body) => {
    if (err) {
      complete(err, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length > 0) {
      complete(null, data[0].description);
    } else {
      complete(new Error(`No results found`), null);
    }
  });
};

module.exports = fetchBreedDescription;
