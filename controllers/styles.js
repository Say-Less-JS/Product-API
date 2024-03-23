const styles = require('../models/styles.js');
const sku = require('../models/sku.js');

module.exports = (req, res, id) => {
  styles(id, (err, response) =>  {
    if (err) {
      res.send(err);
    }
    res.send(response);
  })
}
