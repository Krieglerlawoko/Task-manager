// config/sendGridConfig.js
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text) => {
  const msg = {
    to,
    from: process.env.SENDGRID_FROM_EMAIL, // Your SendGrid verified sender
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };
