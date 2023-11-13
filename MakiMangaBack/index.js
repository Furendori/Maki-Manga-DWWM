const nodemailer = require("nodemailer");
const nodeoutlook = require("nodejs-nodemailer-outlook");
const express = require("express");
const cors = require('cors');
const server = express();
const mongoose = require("mongoose");
const routes = require("./routes/index");

const corsOptions = {
    origin: "http://localhost:5173"
};

server.use(express.json());
server.use(cors(corsOptions));

server.listen(5500, () => {
    console.log("Serveur lancé");

    mongoose.connect("mongodb://127.0.0.1/MakiManga");

    const db = mongoose.connection;

    db.once("open", () => console.log("Connexion au serveur MongoDB et à la base MakiManga, ok !"))
    .on("error", error => console.error("Problème durant la connexion à la base de données", error))
});

routes(server);