const Cart = require("./model");

exports.createCart = async (payload) => {
    const newCartForUser = await Cart.create(payload);
    return newCartForUser;
}

exports.cart = async () => {
    //might need to edit here to select quantity and path of UserId
    const cart = await Cart.find().populate({ 
        path: "items.productId",
        select: "name price total", 
    });
    return cart[0];
};

// exports.addItem = async (payload) => {
//     const newItem = await Cart.create(payload);
//     return newItem;
// }