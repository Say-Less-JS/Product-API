const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/products');

const product = mongoose.model('product', {
  id: Number,
  name: String,
  slogan: String,
  category: String,
  default_price: Number
});

product.set('timestamps', true);

const styles = mongoose.model('styles', {
  id: Number,
  product_id: Number,
  name: String,
  sale_price: Number,
  original_price: Number,
  deafult_style: Number
});

const features = mongoose.model('features', {
  id: Number,
  product_id: Number,
  feature: String,
  value: String
});

const photos = mongoose.model('photos', {
  id: Number,
  styleID: Number,
  url: String,
  thumbnail_url: String
});

const sku = mongoose.model('sku', {
  id: Number,
  styleID: Number,
  size: String,
  quantity: Number
});

const related = mongoose.model('related', {
  id: Number,
  current_product_id: Number,
  related_product_id: Number
});

const cart = mongoose.model('cart', {
  id: Number,
  user_session: Number,
  product_id: Number,
  active: Number
});