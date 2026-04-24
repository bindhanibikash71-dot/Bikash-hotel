const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: String, enum: ['Veg', 'Non-Veg', 'Drinks'], required: true },
  image: { type: String, required: true },
  inStock: { type: Boolean, default: true }, // 8. Stock Control
  isSpecial: { type: Boolean, default: false }, // 3. Today's Special
});

module.exports = mongoose.model('Food', foodSchema);
