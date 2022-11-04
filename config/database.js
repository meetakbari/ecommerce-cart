const mongoose = require("mongoose");

module.exports = app => {
    mongoose.connect('mongodb://localhost:27017/ecart', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(res => console.log("Database connected!")).catch(err => console.log("Database Connection ERROR: " + err))
    mongoose.Promise = global.Promise;
    
    if (app) {
        app.set("mongoose", mongoose);
    }
};