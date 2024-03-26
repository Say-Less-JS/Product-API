//server
require('dotenv').config()
const express = require("express");
const app = express();
const product = require('./controllers/product.js');
const styles = require('./controllers/styles.js');
const related = require('./controllers/related.js');

app.use(express.json());

var PORT = process.env.PORT || 3000;

app.get('/product:id', (req, res) => {
  console.log('GET');
  let id = req.params.id.slice(1);
  product(req, res, id);
});
app.get('/styles:id', (req, res) => {
  let id = req.params.id.slice(1);
  styles(req, res, id);
});
app.get('/related:id', (req, res) => {
  let id = req.params.id.slice(1);
  related(req, res, id);
})

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});