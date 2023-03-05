const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const {sendEmail, verificationEmail} = require("../../helpers");
const { v4 } = require("uuid");

async function register(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({
      status: "conflict",
      code: 409,
      message: "Email in use",
    });
  };
  
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const verificationToken = v4();
  const registeredUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  const { subscription } = registeredUser;
  
  await verificationEmail(email, verificationToken, sendEmail)
  
  res.status(201).json({
    status: "created",
    code: 201,
    data: {
      user: { email, subscription, avatarURL },
    },
  });
}

module.exports = register;
