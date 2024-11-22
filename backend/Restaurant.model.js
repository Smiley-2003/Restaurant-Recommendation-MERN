// Restaurant.model.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  location: String,
  rating: Number,
  offers: Boolean,
  cuisines: [String],
  image: String,
});

module.exports = mongoose.model('restaurant', restaurantSchema);
