const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    nameFR: String,
    nameJP: String,
    image: String,
    description: String, 
    price: Number
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;