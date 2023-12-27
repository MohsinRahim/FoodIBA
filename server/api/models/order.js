const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
    quantity: Number,
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [orderItemSchema],
    status: { 
        type: String, 
        enum: ['Pending', 'Cancelled', 'Accepted', 'Completed'],
        default: 'Pending'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order, OrderItem };
