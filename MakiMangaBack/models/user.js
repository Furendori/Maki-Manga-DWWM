const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false
    },
    lastName: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;