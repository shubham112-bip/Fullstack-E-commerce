const mongoose = require('mongoose');

const clothingProduct = new mongoose.Schema({
    category: String,
    product_id: Number,
    name: String,
    description: String,
    price: Number,
    sizes: [String],
    colors: [String],
    stock_available: Boolean,
    rating: Number,
    images: [String]
});

module.exports = mongoose.model("clothingProduct",clothingProduct);