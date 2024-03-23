const product = require('../models/product.js');
const features = require('../models/features.js');

module.exports = (req, res, id) => {
  let returnProduct;
  product(id, (err, response) => {
    if (err) {
      res.status(401).send(err);
    }
    returnProduct = response[0];
    features(id, (err, response) => {
      if (err) {
        res.status(401).send(err);
      }
      returnProduct.features = response;
      res.status(200).send(returnProduct);
    })
  })
};
