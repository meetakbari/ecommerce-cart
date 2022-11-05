const User = require("./model");
const Cart = require("../Cart/model");

exports.users = async () => {
    const users = await User.find();
    return users;
}

exports.userById = async (id) => {
    const user = await User.findById(id);
    return user;
}

exports.createUser = async (payload) => {
    const newUser = await User.create(payload);
    return newUser;
}

exports
exports.removeUser = async (id) => {
    const user = await User.findByIdAndRemove(id);
    return user;
}