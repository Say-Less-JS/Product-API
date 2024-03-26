const product = require('../models/product.js');

module.exports = (req, res, id) => {
  product(id, (err, response) => {
    if (err) {
      res.status(401).send(err);
    }
    res.send(response);
  })
}