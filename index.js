const fetchBreedDescription = require('./breedFetcher.js');

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
