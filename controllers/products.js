const products = require('../models/products.js');

module.exports = (req, res) => {
  products((err, response) => {
    if (err) {
      res.status(401).send(err);
    }
    res.send(response);
  })
}