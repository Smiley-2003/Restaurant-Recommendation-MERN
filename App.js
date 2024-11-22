// App.js

import style from &quot;./App.module.css&quot;;
import { Form } from &quot;react-bootstrap&quot;;
import NavBar from &quot;./components/NavBar/NavBar&quot;;
import { useState } from &quot;react&quot;;
import CardItem from &quot;./components/RestaurantCard/Card&quot;;
import useRestaurantContext from &quot;./components/Hooks/useRestaurant&quot;;

function App() {


    const { selectedItems, setSelectedItems, setLocation, setRating } =
        useRestaurantContext();

    const options = [
        { value: &quot;North Indian&quot;, label: &quot;North Indian&quot; },
        { value: &quot;South Indian&quot;, label: &quot;South Indian&quot; },
        { value: &quot;Chinese&quot;, label: &quot;Chinese&quot; },
        { value: &quot;Desserts&quot;, label: &quot;Desserts&quot; },
        { value: &quot;Italian&quot;, label: &quot;Italian&quot; },
        { value: &quot;Oriental&quot;, label: &quot;Oriental&quot; },
        { value: &quot;Pastas&quot;, label: &quot;Pastas&quot; },
        { value: &quot;Pizzas&quot;, label: &quot;Pizzas&quot; },
        { value: &quot;Japanese&quot;, label: &quot;Japanese&quot; },
        { value: &quot;Sushi&quot;, label: &quot;Sushi&quot; },
        { value: &quot;Barbecue&quot;, label: &quot;Barbecue&quot; },
        { value: &quot;Steak&quot;, label: &quot;Steak&quot; },
        { value: &quot;Seafood&quot;, label: &quot;Seafood&quot; },
    ];

    const handleCheckboxChange = (value) =&gt; {

        if (selectedItems.includes(value)) {

            setSelectedItems(selectedItems.filter((item) =&gt; item !== value));
        } else {

            setSelectedItems([...selectedItems, value]);
        }

        console.log(&quot;elements&quot;, selectedItems);
    };

    return (
        &lt;div className=&quot;App&quot;&gt;
            &lt;NavBar /&gt;
            &lt;div&gt;
                &lt;div className={style.headers}&gt;
                    &lt;div className={style.locationContainer}&gt;
                        &lt;Form.Select
                            aria-label=&quot;Location&quot;
                            onChange={(e) =&gt; {
                                setLocation(e.target.value);
                            }}
                        &gt;
                            &lt;option hidden&gt;Select Location&lt;/option&gt;
                            &lt;option value=&quot;Hyderabad&quot;&gt;Hyderabad&lt;/option&gt;
                            &lt;option value=&quot;Banglore&quot;&gt;Banglore&lt;/option&gt;
                            &lt;option value=&quot;Mumbai&quot;&gt;Mumbai&lt;/option&gt;
                            &lt;option value=&quot;Delhi&quot;&gt;Delhi&lt;/option&gt;
                            &lt;option value=&quot;Pune&quot;&gt;Pune&lt;/option&gt;
                            &lt;option value=&quot;Chennai&quot;&gt;Chennai&lt;/option&gt;
                        &lt;/Form.Select&gt;
                    &lt;/div&gt;
                    &lt;div className={style.cuisinesContainer}&gt;
                        &lt;Form&gt;
                            &lt;Form.Label&gt;Select Cuisines:&lt;/Form.Label&gt;
                            {options.map((option) =&gt; (
                                &lt;Form.Check
                                    key={option.value}
                                    type=&quot;checkbox&quot;
                                    id={option.value}
                                    label={option.label}
                                    checked={selectedItems?.includes(option.value)}
                                    onChange={() =&gt; handleCheckboxChange(option.value)}
                                /&gt;
                            ))}
                        &lt;/Form&gt;
                    &lt;/div&gt;
                    &lt;div className={style.ratingContainer}&gt;
                        &lt;Form.Select
                            aria-label=&quot;Default select example&quot;
                            onChange={(e) =&gt; {
                                setRating(e.target.value);
                            }}
                        &gt;
                            &lt;option hidden&gt;Select Rating&lt;/option&gt;
                            &lt;option value=&quot;3&quot;&gt;3 above&lt;/option&gt;
                            &lt;option value=&quot;4&quot;&gt;4 above&lt;/option&gt;
                        &lt;/Form.Select&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div className={style.restaurants}&gt;
                &lt;h3&gt;Restaurants&lt;/h3&gt;
                &lt;CardItem /&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    );
}

export default App;
