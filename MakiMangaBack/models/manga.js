const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MangaSchema = new Schema({
    nameFR: String,
    nameJP: String,
    releaseDate: String,
    image: String,
    description: String, 
});

const MangaModel = mongoose.model("manga", MangaSchema);

module.exports = MangaModel;