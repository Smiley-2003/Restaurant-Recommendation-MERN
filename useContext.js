// useContext.js

import { createContext, useContext, useState } from &quot;react&quot;;

const RestaurantContext = createContext();

const Provider = ({ children }) =&gt; {
    const [selectedItems, setSelectedItems] = useState([]);
    const [location, setLocation] = useState();
    const [rating, setRating] = useState();

    const data = {
        selectedItems,
        setSelectedItems,
        location,
        setLocation,
        rating,
        setRating,
    };

    return (
        <RestaurantContext.Provider value={{ selectedItems, setSelectedItems }}>
            {children}
        </RestaurantContext.Provider>
    );
};

export { Provider };

export default RestaurantContext;
