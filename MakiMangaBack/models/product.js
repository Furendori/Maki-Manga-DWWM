const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, index: true },
    image: String,
    description: String, 
    price: Number
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;