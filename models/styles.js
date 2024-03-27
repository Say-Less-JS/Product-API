const db = require('../db/postgres.js');

module.exports = (id, callback) => {
  let query = `SELECT s.id, s.name, s.sale_price, s.original_price, s.default_style, p.photos, k.skus FROM styles s LEFT JOIN (SELECT  style_id, json_agg(json_build_object('thumbnail', thumbnail_url, 'url', url)) AS photos FROM  photos GROUP BY style_id) p ON s.id = p.style_id LEFT JOIN (SELECT style_id, json_agg(json_build_object(sku.id, json_build_object('quantity', quantity, 'size', size))) AS skus FROM sku GROUP BY style_id) k ON s.id = k.style_id WHERE s.product_id = ${id}`;

  db.query(query)
    .then((response) => {
      callback(null, response.rows);
    })
    .catch((err) => {
      callback(err);
    })
};

// module.exports = (id, callback) => {
//   let query = 'SELECT id, name, sale_price, original_price, default_style FROM styles WHERE product_id = $1';
//   let value = [id];
//   let result = [];

//   let i = 0;

//   const extraCaller = function() {
//     let photoQuery = 'SELECT id, url, thumbnail_url FROM photos WHERE style_id = $1';
//     let skuQuery = 'SELECT sku, size, quantity FROM sku WHERE style_id = $1';
//     let style_id = [result[i].id];

//     db.query(photoQuery, value)
//       .then((response) => {
//         result[i].photos = response.rows;
//         return db.query(skuQuery, value);
//       })
//       .then((response) => {
//         result[i].sku = response.rows;
//         i++;
//         if(i === result.length) {
//           callback(null, result);
//         } else {
//           extraCaller(i, result);
//         }
//       })
//   }

//   db.query(query, value)
//     .then((response) => {
//       result = response.rows;
//       extraCaller()
//     })
//     .catch((err) => {
//       console.log('Error retrieving style information');
//       callback(err);
//     })
// };
