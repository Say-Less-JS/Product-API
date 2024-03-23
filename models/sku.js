const db = require('../db/postgres.js');

module.exports = (id, callback) => {
  let query = 'SELECT json_object_agg(sku, json_build_object("size", size, "quantity", quantity)) AS skus FROM sku WHERE style_id = $1 GROUP BY sku';
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