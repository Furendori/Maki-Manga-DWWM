const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
    async auth(req, res, next) {

        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "L'authentification est requise"});
        }

        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            const user = await User.findById(decodedToken.userId);

            if (!user) {
                return res.status(404).json({ message: "Le compte n'a pas été trouvé"});
            }

            req.user = user;
            next();
        } catch (error) {
            res.status(401).json({ message: "Token invalide"});
        }
    }
}

