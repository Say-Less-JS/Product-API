const db = require('../db/postgres.js');

module.exports = (callback) => {
  let query = 'SELECT * FROM product LIMIT 5';

  db.query(query)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      console.log('Error retrieving product information');
      callback(err);
    });
};