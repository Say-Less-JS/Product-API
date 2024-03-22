const db = require('../db/postgres.js');

module.exports = (callback) => {
  let query = 'SELECT * FROM product LIMIT $1';
  let limit = 5;

  db.query(query, limit)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      console.log('Error retrieving product information');
      callback(err);
    });
};