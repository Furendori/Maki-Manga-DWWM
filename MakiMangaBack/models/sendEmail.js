const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SendEmailSchema = new Schema({
    name: String,
    email: String,
    object: String, 
    subject: String,
    message: String
});

const SendEmailModel = mongoose.model("sendEmail", SendEmailSchema);

module.exports = SendEmailModel;