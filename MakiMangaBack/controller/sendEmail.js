const nodemailer = require("nodemailer");

module.export = {
    async sendEmail(req, res) {
        const body = req.body;

        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp-relay.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "angelique.didillon@gmail.com",
                    pass: "rzsu zfwz cntl yuhh"
                }
            });
    
            const info = await transporter.sendMail({
                from: body.email,
                to: "angelique.didillon@gmail.com",
                subject: body.subject,
                text: `${body.objectSelect},
                ${body.name},
                ${body.text}`,
            });

            console.log("Message envoyé:" + info.messageId);
            res.status(200).send("Email envoyé avec succès !")

        } catch (error) {
            console.error("Erreur lors de l'envoie du messsage : " + error.message);
            res.status(500).send("Une erreur s'est produite lors de l'envoi de l'email.");
        }
    }
}