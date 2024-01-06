const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;