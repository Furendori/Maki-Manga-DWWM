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
        const manga = new MangaModel({...req.body});
        manga.save().then(() => {
            res.send({
                response: `Création du manga ${manga.name} effectué avec succès`
            });
        }).catch((e) => console.log(e.toString()));
    },

    update(req, res) {
        const id = req.body._id;
        if(id) {
            MangaModel.findByIdAndUpdate(id, req.body).then(manga => {
                res.send(`Mise à jour du manga ${manga.name}`)
            });
        } else {
            res.send({ result: "Un id est nécessaire pour mettre à jour le manga"})
        }
    },

    delete(req, res) {
        const id = req.params.id;
        MangaModel.findByIdAndRemove(id).then(manga => {
            res.send({
                response: `Suppression du manga ${manga.name} a bien été supprimé`
            });
        });
    }
}