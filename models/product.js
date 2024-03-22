const db = require('../db/postgres.js');

module.exports = (id, callback) => {
  let query = 'SELECT * FROM product WHERE id = $1';
  let value = [id];

  db.query(query, value)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      console.log('Error retrieving product information');
      callback(err);
    });
};