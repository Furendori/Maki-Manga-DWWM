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

    findByEmail(req, res){
        const email = req.params.email;
        UserModel.findOne({email})
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'Utilisateur non trouvé' });
            }

            // Renvoyez l'utilisateur
            res.json({ user });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur lors de la recherche de l\'utilisateur' });
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

    login: async(req, res) => {
        const {email, password} = req.body;

        try {
            const user = await UserModel.findOne({email, password});

            if (!user) {
                return res.status(401).json({success : false, message : 'Internal email or password'})
            }

            res.json({success : true, message : 'login successful'});
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({success : false, message : 'Internal server error'})
        }
    }
}