const UserModel = require("../models/user");

module.exports = {
    getAll(req, res) {
        UserModel.find().then(users => {
            res.send(users);
        });
    },

    get(req, res) {
        const id = req.params.id;
        UserModel.findById(id).then(user => {
            res.send(user);
        });
    },

    create(req, res) {
        const user = new UserModel({...req.body});

        user.save().then(() => {
            res.send({
                response: `Création du compte ${user.firstName} créé avec succès`
            });
        }).catch((error) => console.log(error.toString()));
    },

    update(req, res) {
        const id = req.body._id;
        if(id) {
            UserModel.findByIdAndUpdate(id, req.body).then(user => {
                res.send(`Mise à jour du compte ${user.firstName}`)
            });
        } else {
            res.send({ result: "Un id est nécessaire pour mettre à jour le compte"})
        }
    },
}