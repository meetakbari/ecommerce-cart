const productRoutes = require("../src/app/Product/routes");
const cartRoutes = require("../src/app/Cart/routes");
const userRoutes = require("../src/app/User/routes");

module.exports = app => {
    app.use("/api/v1/products", productRoutes);
    app.use("/api/v1/cart", cartRoutes);
    app.use("/api/v1/users", userRoutes);
}