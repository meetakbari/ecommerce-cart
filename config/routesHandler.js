const productRoutes = require("../src/app/Product/routes");
const cartRoutes = require("../src/app/Cart/routes");
const userRoutes = require("../src/app/User/routes");

module.exports = app => {
    app.use("/product", productRoutes);
    app.use("/cart", cartRoutes);
    app.use("/user", userRoutes);
}