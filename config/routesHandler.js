const productRoutes = require("../src/app/Product/routes");

module.exports = app => {
    app.use("/product", productRoutes);
}