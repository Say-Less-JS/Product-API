const db = require('../db/postgres.js');

module.exports = (id, callback) => {
  let query = 'SELECT p.*, json_agg(json_build_object("feature", f.value)) AS features FROM product p LEFT JOIN features f ON p.id = f.product_id WHERE p.id = $1 GROUP BY p.id;';
  let value = [id];

  db.query(query, value)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      callback(err);
    })
};