const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
    async auth(req, res, next) {
        try {
            const token = req.headers.authorization?.split(" ")[1];

            if (!token) {
                token = token.split("")[1];
                let user = jwt.verify(token)(token, process.env.SECRET_KEY);
                req.id = user.id;
            }
            else {
                res.status(401).json({message: "Unauthorized User"});
            }

            next();

        } catch (error) {
            console.log("Unauthorized User" + error);
        }
    }
}

