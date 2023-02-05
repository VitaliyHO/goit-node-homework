const { User } = require("../../models");
const bcrypt = require("bcrypt");

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
  const registeredUser = await User.create({ email, password: hashPassword });
  const { subscription } = registeredUser;
  res.status(201).json({
    status: "created",
    code: 201,
    data: {
      user: { email, subscription },
    },
  });
}

module.exports = register;
