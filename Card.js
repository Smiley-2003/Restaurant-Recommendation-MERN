// Card.js

import Card from &quot;react-bootstrap/Card&quot;;
import ListGroup from &quot;react-bootstrap/ListGroup&quot;;
import useRestaurantContext from &quot;../Hooks/useRestaurant&quot;;
import { useEffect, useState } from &quot;react&quot;;
import axios from &quot;axios&quot;;

function CardItem() {
    const { location, rating, selectedItems } = useRestaurantContext();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() =&gt; {
        getAllRestaurants();
    }, [location, rating, selectedItems]);

    const getAllRestaurants = async () =&gt; {
        axios
            .post(&quot;http://localhost:4000/api/restaurants&quot;, {
                location: location,
                rating: rating,
                cuisines: selectedItems,
            })
            .then(
                (response) =&gt; {
                    console.log(&quot;response is&quot;, response);
                    if (response.data.success) {
                        setRestaurants(response.data.data);
                    }
                },
                (error) =&gt; {
                    console.log(&quot;error is &quot;, error);
                }
            );
    };

    return (
        &lt;div style={{ display: &quot;flex&quot;, flexWrap: &quot;wrap&quot;, marginLeft: &quot;2vw&quot; }}&gt;
            {restaurants.map((item) =&gt; (
                &lt;Card style={{ width: &quot;18rem&quot;, marginLeft: &quot;4vw&quot;, marginTop: &quot;4vh&quot; }}&gt;
                    &lt;Card.Img
                        variant=&quot;top&quot;
                        src={item.image}
                        style={{ height: &quot;20vh&quot;, backgroundCover: &quot;cover&quot; }}
                    /&gt;
                    &lt;Card.Body&gt;
                        &lt;Card.Title&gt;{item.name}&lt;/Card.Title&gt;
                        &lt;Card.Text&gt;
                            Types of food we offer :{&quot; &quot;}
                            {item.cuisines?.map((foodItem) =&gt; foodItem + &quot;,  &quot;)}
                        &lt;/Card.Text&gt;
                    &lt;/Card.Body&gt;
                    &lt;ListGroup className=&quot;list-group-flush&quot;&gt;
                        &lt;ListGroup.Item&gt;Address:{item.address}&lt;/ListGroup.Item&gt;
                        &lt;ListGroup.Item&gt;City:{item.location}&lt;/ListGroup.Item&gt;
                        &lt;ListGroup.Item&gt;Rating:{item.rating}&lt;/ListGroup.Item&gt;
                    &lt;/ListGroup&gt;
                &lt;/Card&gt;
            ))}
        &lt;/div&gt;
    );
}

export default CardItem;
