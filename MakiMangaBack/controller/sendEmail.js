const SendEmailModel = require("../models/sendEmail");

module.export = {
    create(req, res) {
        const email = new SendEmailModel({...req.body});

        const transporter = nodemailer.createTransport({
            host: "smtp.fowardemail.net",
            port: 465,
            secure: true,
            auth: {
                user: "christa.leannon@ethereal.email",
                pass: "FRzmDgS3VS4WDsEctr"
            }
        })
    }
}