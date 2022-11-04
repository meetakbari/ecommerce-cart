import app from './config/app';

require("./config/database")(app) // database configuration is imported as app from database.js 
require("./config/routesHandler")(app) // routes handler exported as app

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({
        message: 'Home page of shopping app'
    })
});

app.listen(PORT, () => {
    console.log(`shopping cart running on  ${PORT}`);
});