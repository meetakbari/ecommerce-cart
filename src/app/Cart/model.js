const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'At least 1 Q is needed to add in cart!'],
    },
    price: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});

const CartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    items: [ItemSchema],
    subTotal: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
});

const Cart= mongoose.model('Cart', CartSchema);
module.exports = Cart;