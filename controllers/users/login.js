const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");

const { SECRET_KEY } = process.env;

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const isComparePass = bcrypt.compareSync(password, user.password);
  if (!user || !isComparePass) {
    res.status(401).json({
      status: "unauthorized",
      code: 401,
      data: {
        message: "Email or password is wrong",
      },
    });
  }

  const { subscription } = user;
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }); 
  await User.findByIdAndUpdate(user.id, {token})

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        email,
        subscription,
      },
    },
  });
}

module.exports = login;
