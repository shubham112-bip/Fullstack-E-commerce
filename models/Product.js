const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: Number,
  name: String,
  description: String,
  price: Number,
  sizes: [String],
  colors: [String],
  stock_available: Boolean,
  rating: Number,
  images: [String],
  category: String,
  sub_category: String,
  brand: String,
  model: String,
  specs: Object,
});

module.exports = mongoose.model("Product", productSchema);