const db = require('../db/postgres.js');

module.exports = (id, callback) => {
  let query = 'SELECT id, name, sale_price, original_price, default_style FROM styles WHERE product_id = $1';
  let value = [id];
  let result = [];

  let i = 0;

  const extraCaller = function() {
    let photoQuery = 'SELECT id, url, thumbnail_url FROM photos WHERE style_id = $1';
    let skuQuery = 'SELECT sku, size, quantity FROM sku WHERE style_id = $1';
    let style_id = [result[i].id];

    db.query(photoQuery, value)
      .then((response) => {
        result[i].photos = response.rows;
        return db.query(skuQuery, value);
      })
      .then((response) => {
        result[i].sku = response.rows;
        i++;
        if(i === result.length) {
          callback(null, result);
        } else {
          extraCaller(i, result);
        }
      })
  }

  db.query(query, value)
    .then((response) => {
      result = response.rows;
      console.log(result);
      extraCaller()
    })
    .catch((err) => {
      console.log('Error retrieving style information');
      callback(err);
    })
};
