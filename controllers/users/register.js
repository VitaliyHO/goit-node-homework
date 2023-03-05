const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { v4 } = require("uuid");
const sendEmail = require("../../helpers");

async function register(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({
      status: "conflict",
      code: 409,
      message: "Email in use",
    });
  }

  const verificationToken = v4();

  
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const registeredUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  const { subscription } = registeredUser;

  const emailForVerify = {
    to: email,
    subject: "Підтвердження реєстрації",
    html: `<a target="_blank" href="http://localhost:5000/api/users/verify/${verificationToken}">Щоб підтвердити реєстрацію клацніть тут</a>`,
  };

  await sendEmail(emailForVerify);
  
  res.status(201).json({
    status: "created",
    code: 201,
    data: {
      user: { email, subscription, avatarURL },
    },
  });
}

module.exports = register;
