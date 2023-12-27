const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');
const MenuItem = require('../models/menuItem');
const Review = require('../models/review');
const authenticate = require('../middleware/authenticate');

// Create a new restaurant
router.post('/', authenticate, async (req, res) => {
    const { name, logo, website, location, email, menu } = req.body;

    const restaurant = new Restaurant({ name, logo, website, location, email, menu });

    await restaurant.save();
    res.status(201).json(restaurant);
});

// Read all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        res.status(200).json(restaurants);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Read a single restaurant by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a restaurant by ID
router.put('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    const { name, logo, website, location, email, menu } = req.body;

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
        id,
        { name, logo, website, location, email, menu },
        { new: true }
    );

    res.json(updatedRestaurant);
});

// Delete a restaurant by ID
router.delete('/:id', authenticate, async (req, res) => {
    const { id } = req.params;

    await Restaurant.findByIdAndDelete(id);
    res.sendStatus(204);
});

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const Restaurant = require('../models/restaurant');
// const Meal = require('../models/meal');
// const authenticate = require('../middleware/authenticate');

// // Create a new restaurant
// router.post('/', authenticate, async (req, res) => {
//     const { name, logo, website, location, email } = req.body;
//     const restaurant = new Restaurant({ name, logo, website, location, email });
//     await restaurant.save();
//     res.status(201).json(restaurant);
// });

// // Read all restaurants and group meals by calories
// router.get('/', async (req, res) => {
//     try {
//         const restaurants = await Restaurant.find().populate({
//             path: 'meals',
//             options: { sort: { calories: 1 } },
//         });

//         const groupedRestaurants = {};

//         restaurants.forEach(restaurant => {
//             const restaurantDetails = {
//                 name: restaurant.name,
//                 logo: restaurant.logo,
//                 website: restaurant.website,
//                 location: restaurant.location,
//                 email: restaurant.email,
//                 meals: {}, // Initialize meals as an empty object
//             };

//             restaurant.meals.forEach(meal => {
//                 const calorie = meal.calories.toString(); // Convert calorie to a string to use as a key
//                 if (!restaurantDetails.meals[calorie]) {
//                     restaurantDetails.meals[calorie] = [];
//                 }

//                 // Push the meal name into the corresponding calorie group
//                 restaurantDetails.meals[calorie].push(meal.name);
//             });

//             // Add the restaurant details to the groupedRestaurants object
//             groupedRestaurants[restaurant.name] = restaurantDetails;
//         });

//         res.status(200).json(Object.values(groupedRestaurants));

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });




// // Update a restaurant by ID
// router.put('/:id', authenticate, async (req, res) => {
//     const { id } = req.params;
//     const { name, logo, website, location, email } = req.body;
//     const updatedRestaurant = await Restaurant.findByIdAndUpdate(
//         id,
//         { name, logo, website, location, email },
//         { new: true }
//     );
//     res.json(updatedRestaurant);
// });

// // Delete a restaurant by ID
// router.delete('/:id', authenticate, async (req, res) => {
//     const { id } = req.params;
//     await Restaurant.findByIdAndDelete(id);
//     res.sendStatus(204);
// });

// module.exports = router;


