const SendEmailModel = require("../models/sendEmail");

module.export = {
    create(req, res) {
        const email = new SendEmailModel({...req.body});

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "",
                pass: ""
            }
        })
    }
}