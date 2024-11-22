//restaurant.route.js

const express = require('express');
const router = express.Router();

const {
  getRestaurantsByFilters,
} = require('../controllers/restaurant.controller');

router.route('/restaurants').post(getRestaurantsByFilters);

module.exports = router;
