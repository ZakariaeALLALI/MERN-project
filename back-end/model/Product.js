const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  availability: { type: Boolean, required: true },
  image: { type: String, default: null }, // Optional, image URL can be stored here
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
