const nodemailer = require("nodemailer");

module.exports = {
  sendEmail(req, res) {
    const body = req.body;
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

    transporter.sendMail({
        from: body.email,
        to: "angelique.didillon@gmail.com",
        subject: body.subject,
        text: `${body.objectSelect},
            ${body.name},
            ${body.text}`,
            
    }).then((info) => {
        console.log("Message envoyé:" + info.messageId);
        res.status(200).send("Email envoyé avec succès !");
    }).catch((error) => {
        console.error("Erreur lors de l'envoie du message : " + error.message);
        res.status(500).send("Une erreur s'est produite lors de l'envoi de l'email.");
    });
  },
};
