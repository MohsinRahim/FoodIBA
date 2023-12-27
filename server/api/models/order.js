const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [
        {
            menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
            quantity: Number,
        }
    ],
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    status: { 
        type: String, 
        enum: ['Pending', 'Cancelled', 'Accepted', 'Completed'],
        default: 'Pending'
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order };
