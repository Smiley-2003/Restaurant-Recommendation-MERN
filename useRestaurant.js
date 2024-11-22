// useRestaurant.js
import React, { useContext } from 'react';
import { RestaurantContext } from '../Context/RestaurantContext'; // Import the correct context

const useRestaurantContext = () => {
    const restaurantContext = useContext(RestaurantContext);

    if (!restaurantContext) {
        // Handle missing context (optional)
        throw new Error('RestaurantContext not found');
    }

    return restaurantContext;
};

export default useRestaurantContext;
