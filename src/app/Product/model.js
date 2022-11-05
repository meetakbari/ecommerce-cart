const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is missing!"]
    },
    price: {
        type: Number,
        required: [true, "Product price is missing!"]
    },
    quantity: {
        type: Number,
        default: 0
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;