const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
    username: {
        type: String, 
        lowercase: true, 
        unique: true,
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        index: true,
    },
    email: {
        type: String, 
        lowercase: true,
        unique: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'], 
    },
}, {
    timestamps: true
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken!'});

const User = mongoose.model('User', UserSchema);
module.exports = User;