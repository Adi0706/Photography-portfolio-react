const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = async (req, res) => {
  try {
    const { name, email, Phone_Number, Text_Field } = req.body;
    console.log(name, email, Phone_Number, Text_Field);

    const mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${Phone_Number}\nMessage: ${Text_Field}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};

router.post("/sendEmail", sendEmail);

module.exports = router;