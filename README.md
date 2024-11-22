# Resturant-Reccomendation-MERN

#Frontend Project

Step 1: Create a reactJS application by using this command

npx create-react-app myapp

Step 2: Navigate to project directory

cd myapp

Step 3: Install the necessary packages/libraries in your project using the following commands.

npm i axios react-bootstrap

1)App.js : This is the main file which contains the Navabar component ,filters like location,rating,cuisines and CardItem component which contains the information of each restaurant in card format.

2)NavBar.js : This file contain the navbar which has the name of the project.

3)CardItem : This file contains the code to fetch the restaurant data from the backend based on the filters selected by the user and present the each restaurant details to the user in card format.

4)useContext.js : This file contains the context api code where the filters like location,rating and cuisines are accessed as global state.

5)useRestaurant.js : This file contains the code for the custom hook which is used to access the state of location,rating,cuisines at any component in the project.
