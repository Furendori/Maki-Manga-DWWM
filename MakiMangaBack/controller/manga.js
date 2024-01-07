const MangaModel = require("../models/manga");

module.exports = {
    getAll(req, res) {
        MangaModel.find().then((mangas) => {
            res.send(mangas);
        });
    },

    get(req, res) {
        const id = req.params.id;
        MangaModel.findOne({ _id: id }).then(manga => {
            res.send(manga);
        });
    },

    create(req, res) {
        const manga = new MangaModel(req.body);
        manga.save().then(() => {
            res.send({
                response: `Création du manga ${manga.nameFR} effectué avec succès`
            });
        });
    },

    update(req, res) {
        const id = req.params.id;
        MangaModel.findByIdAndUpdate({ _id: id,}, req.body).then(manga => {
            res.send(`Mise à jour du manga ${manga.nameFR}`)
        });
    },

    delete(req, res) {
        const id = req.params.id;
        MangaModel.findByIdAndDelete({ _id: id }).then(manga => {
            res.send({
                response: `Suppression du manga ${manga.nameFR} a bien été supprimé`
            });
        });
    }
}