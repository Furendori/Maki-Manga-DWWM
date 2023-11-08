const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    phone: Number, 
    email: String
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;