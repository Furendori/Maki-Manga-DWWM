const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    image: String,
    description: String, 
    price: Number
});

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;