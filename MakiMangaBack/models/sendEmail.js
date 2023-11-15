const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SendEmailSchema = new Schema({
    name: {
        type: String,
        required: [true, " un nom"]
    },
    email: {
        type: String,
        required: [true, "Mettez un adresse mail"]
    },
    object: {
        type: String,
        required: [true, "Mettez un object"]
    },
    subject: {
        type: String,
        required: [true, "Mettez un sujet"]
    },
    message: {
        type: String,
        required: [true, "Mettez un message"]
    }
});

const SendEmailModel = mongoose.model("sendEmail", SendEmailSchema);

module.exports = SendEmailModel;