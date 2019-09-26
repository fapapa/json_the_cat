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

fetchBreedDescription(process.argv[2], (err, description) => {
  if (err && err.code === 'ENOTFOUND') {
    console.error('ERROR! Request failed:');
    console.error(err);
  } else if (err && err.message === 'No results found') {
    console.error('ERROR! No results found:');
    console.error('No results were returned for the query.');
  } else {
    console.log(description);
  }
});
