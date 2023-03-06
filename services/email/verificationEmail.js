async function verificationEmail(email, token, handler) {
  const message = {
    to: email,
    subject: "Підтвердження реєстрації",
    html: `<a target="_blank" href="http://localhost:5000/api/users/verify/${token}">Щоб підтвердити реєстрацію клацніть тут</a>`,
  };
  handler(message);
}

module.exports = verificationEmail;
