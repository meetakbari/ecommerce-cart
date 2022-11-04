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
        required: [true, "Product quantity is missing!"]
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;