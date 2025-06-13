const nodemailer = require('nodemailer');
require('dotenv').config();

const sendMail = async (name, email, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: message,
  });
};

module.exports = sendMail;
