const styles = require('../models/styles.js');
const photos = require('../models/photos.js');
const sku = require('../models/sku.js');

// module.exports = (req, res, id) => {
//   let returnObject = { "product_id": id };
//   styles(id, (err, response) => {
//     if (err) {
//       res.status(401).send(err);
//     }
//     return response;
//   })
//   .then((response) => {
//     returnObject.results = response;
//     res.send(returnObject);
//   })
// };

module.exports = (req, res, id) => {
  styles(id, (err, response) =>  {
    if (err) {
      res.send(err);
    }
    res.send(response);
  })
}


// module.exports = (req, res, id) => {
//   let returnObject = {"product_id": id};
//   styles(id, (err, response) => {
//     if (err) {
//       res.status(401).send(err);
//     }
//     returnObject.results = response;
//     console.log(returnObject.results.length);
//     for (var i = 0; i < returnObject.results.length; i ++) {
//       photos(returnObject.results[i].id, (err, response) => {
//         if (err) {
//           res.status(402).send(err);
//         }
//         console.log('response', response);
//         // console.log('return');
//         // returnObject.results[i].photos = response;
//         let callback = (err, response) => {
//           if (err) {
//             res.status(403).send(err);
//           }
//         }
//         if (i + 1 === returnObject.results.length) {
//           callback = (err, response) => {
//             res.send(returnObject);
//           }
//         }
//         sku(returnObject.results[i].id, callback);
//       })
//     }
//   })
// };