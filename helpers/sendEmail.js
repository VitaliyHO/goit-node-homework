const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendEmail(data) {
  const email = { ...data, from: "vitaliyhotsuliak0103@gmail.com" };
  try {
    sgMail.send(email);

    console.log("Email sent");
    return true;
  } catch (error) {
    console.error(error.message);
  }
}


module.exports = sendEmail;
