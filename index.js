//server
require('dotenv').config()
const express = require("express");
const app = express();
const product = require('./controllers/product.js');
const products = require('./controllers/products.js');
const styles = require('./controllers/styles.js');
const related = require('./controllers/related.js');
const path = require('path');

app.use(express.json());

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './public')));

// app.get('/product:id', (req, res) => {
//   let id = req.params.id.slice(1);
//   product(req, res, id);
// });
app.get('/product', (req, res) => {
  product(req, res, req.query.id);
});
// app.get('/styles:id', (req, res) => {
//   let id = req.params.id.slice(1);
//   styles(req, res, id);
// });
app.get('/styles', (req, res) => {
  let id = req.query.id;
  styles(req, res, id);
});
// app.get('/related:id', (req, res) => {
//   let id = req.params.id.slice(1);
//   related(req, res, id);
// });
app.get('/related', (req, res) => {
  let id = req.query.id;
  related(req, res, id);
});
app.get('/loaderio-5cd3c632d2e3afb8f1d0d6d24a4ca8df.txt', (req, res) => {
  res.send('loaderio-5cd3c632d2e3afb8f1d0d6d24a4ca8df');
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});