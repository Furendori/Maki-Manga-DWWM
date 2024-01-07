const UserModel = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = {
    getAll(req, res) {
        UserModel.find().then(users => {
            res.send(users);
        });
    },

    get(req, res) {
        const id = req.params?.id ?? req.user._id;
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
            res.status(500).json({ error: "Erreur lors de la recherche de l'utilisateur" });
        });
    },

   async create(req, res) {
        const {firstName, lastName, email, password }= req.body;

        try {
            const existingUser = await UserModel.findOne({ email : email });

            if (existingUser) {
                return res.status(400).json({message: "Il y a déjà un compte existant avec cette adresse mail"});
            }

            if (password) {
                
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = new UserModel({...req.body, password: hashedPassword});

            user.save().then(() => {
                res.send({
                    response: `Création du compte ${user.firstName} ${user.lastName} créé avec succès`
                });
            }).catch((error) => console.log(error.toString()));
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "Quelque chose ne fonctionne pas"});
        }
    },

    update(req, res) {
        const id = req.user._id;
        if(id) {
            UserModel.findByIdAndUpdate(id, req.body).then(user => {
                res.send(`Mise à jour du compte ${user.firstName}`)
            });
        } else {
            res.send({ result: "Un id est nécessaire pour mettre à jour le compte"})
        }
    },

    delete(req, res) {
        const id = req.params?.id ?? req.user._id;
        UserModel.findById(id).then(user => {
            res.delete(user);
        });
    }

    // login: async(req, res) => {
    //     const {email, password} = req.body;

    //     try {
    //         const user = await UserModel.findOne({email, password});

    //         if (!user) {
    //             return res.status(401).json({success : false, message : 'Internal email or password'})
    //         }

    //         res.json({success : true, message : 'login successful'});
    //     } catch (error) {
    //         console.error('Error during login:', error);
    //         res.status(500).json({success : false, message : 'Internal server error'})
    //     }
    // }
}