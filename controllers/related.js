const related = require('../models/related.js');

module.exports = function (req, res, id) {
  related(id, (err, response) => {
    if (err) {
      res.status(401).send(err);
    }
    res.send(response);
  })
}