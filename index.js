import app from './config/app';

require("./config/database")(app) // database configuration is imported as app from database.js 
require("./config/routesHandler")(app) // routes handler exported as app

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({
        message: 'E-cart app API',
        howToUse: 'endpoints /product, /user, /cart for products, users and cart CRUD operations respectively.'
    })
});

app.listen(PORT, () => {
    console.log(`E-cart app running on localhost:${PORT}`);
});