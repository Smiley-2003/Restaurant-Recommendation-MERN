// restaurant.controller.js

const RestaurantModel = require('../models/Restaurant.model');

const getRestaurantsByFilters = async (req, res) => {
  console.log('request body is', req.body);
  try {
    const { location, rating, cuisines } = req.body;
    const query = {};
    if (location) {
      query.location = location;
    }

    if (rating?.length > 0) {
      if (rating == 3) {
        query.rating = { $gte: 3, $lte: 5 };
      } else {
        query.rating = { $gte: 4, $lte: 5 };
      }
    }

    if (cuisines?.length > 0) {
      query.cuisines = { $in: cuisines };
    }

    const restaurants = await RestaurantModel.find(query);
    if (restaurants.length > 0) {
      res.json({ success: true, data: restaurants });
    } else {
      res.json({ success: false, message: 'No such data found!' });
    }
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

module.exports = { getAllRestaurants, getRestaurantsByFilters };
