const express = require('express');
const router = express.Router();
const { Order } = require('../models/order');
const authenticate = require('../middleware/authenticate');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const Restaurant = require('../models/restaurant');
const MenuItem = require('../models/menuItem');

// Create a new order
router.post('/', authenticate, async (req, res) => {
    const token = req.header('x-auth-token');
    const decodedToken = jwt.decode(token);
    if (!decodedToken) {
        return res.status(401).json({ error: 'You must be logged in to place an order' });
    }
    console.log(await req.body);
    const userId = decodedToken._id;
    const body = req.body;
    const newOrder = new Order({
        user: userId,
        items: body.items,
        restaurant: body.restaurant,
        status: 'Pending'
    });
    
    try {
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// // Get orders for a user with user details
// router.get('/', authenticate, async (req, res) => {
//     try {
//         // Populate menu item details and user details
//         const orders = await Order.find({ user: req.user._id })
//             .populate('items.menuItem')
//             .populate('user', 'firstName lastName email');  // Populate user details

//         res.status(200).json(orders.map(order => {
//             // Map over orders to modify the structure
//             return {
//                 ...order.toObject(), // Convert to plain JavaScript object
//                 user: {
//                     firstName: order.user.firstName,
//                     lastName: order.user.lastName,
//                     email: order.user.email
//                 }
//             };
//         }));
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// Get orders for a user
router.get('/', authenticate, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }).populate('items.menuItem');
        res.status(200).json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update order status
router.put('/:orderId', authenticate, async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    try {
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        order.status = status;
        order.updatedAt = new Date();
        await order.save();

        res.status(200).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// router.
);

module.exports = router;
