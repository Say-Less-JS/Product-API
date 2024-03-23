const db = require('../db/postgres.js');

module.exports = (id, callback) => {
  let query = 'SELECT feature, value FROM features WHERE product_id = $1';
  let value = [id];

  db.query(query, value)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      callback(err);
    })
};