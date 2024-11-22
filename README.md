# Resturant-Reccomendation-MERN


App.js : This is the main file which contains the Navabar component ,filters like location,rating,cuisines and CardItem component which contains the information of each restaurant in card format.
NavBar.js : This file contain the navbar which has the name of the project.
CardItem : This file contains the code to fetch the restaurant data from the backend based on the filters selected by the user and present the each restaurant details to the user in card format.
useContext.js : This file contains the context api code where the filters like location,rating and cuisines are accessed as global state.
useRestaurant.js : This file contains the code for the custom hook which is used to access the state of location,rating,cuisines at any component in the project.
