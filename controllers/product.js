const product = require('../models/product.js');

// module.exports = (req, res, id) => {
//   let returnProduct;
//   product(id, (err, response) => {
//     if (err) {
//       res.status(401).send(err);
//     }
//     returnProduct = response[0];
//     features(id, (err, response) => {
//       if (err) {
//         res.status(401).send(err);
//       }
//       returnProduct.features = response;
//       res.status(200).send(returnProduct);
//     })
//   })
// };

module.exports = (req, res, id) => {
  product(id, (err, response) => {
    if (err) {
      res.status(401).send(err);
    }
    res.send(response);
  })
}