// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

require('dotenv').config();

// create a express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to mongodb using mongoose

// Please use process.env.MONGO_URL instead of my mongodb url
mongoose
    .connect(YOURS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Failed to connect to MongoDB', error);
    });

app.get('/health', (req, res) => {
    res.status(200).json('Server is up and running');
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const restaurantRoutes = require('./routes/restaurant.route');

app.use('/api', restaurantRoutes);
