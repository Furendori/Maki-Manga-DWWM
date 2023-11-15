const nodemailer = require("nodemailer");

module.export = {
    async sendMail(req, res) {
        const body = req.body;

        try {
            const transporter = nodemailer.createTransport({
                host: "smtp-relay.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "christa.leannon@ethereal.email",
                    pass: "FRzmDgS3VS4WDsEctr"
                }
            });
    
            await transporter.sendMail({
                from: body.email,
                to: "anfge",
                subject: body.subject + Object,
                text: body.text,
            });
            ok
        } catch (e) {
            merde
        }
    }
}