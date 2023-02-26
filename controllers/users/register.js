const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require('gravatar');

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
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email)
  const registeredUser = await User.create({ email, password: hashPassword, avatarURL });
  const { subscription } = registeredUser;
  res.status(201).json({
    status: "created",
    code: 201,
    data: {
      user: { email, subscription, avatarURL },
    },
  });
}

module.exports = register;
