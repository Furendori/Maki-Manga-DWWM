const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");


module.exports = {
    async signIn(req, res) {
        const {email, password} = req.body;

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: "Aucun utilisateur n'a été trouvé"});ù
            }

            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: "Les identifiants sont incorrects"});
            }

            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
                expiresIn: "2 hour"
            });
            res.json({ token });

        } catch (error) {
            res.status(500).json({ message: "Une erreur est survenue lors de la connexion"});
        }
    },
}