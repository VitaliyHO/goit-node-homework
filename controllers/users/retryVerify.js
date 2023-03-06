// const { verificationEmail, sendEmail } = require("../../helpers");
const { User } = require("../../models");
const { verificationEmail, sendEmail } = require("../../services");

async function retryVerify(req, res) {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.verify) {
    res.status(400).json({
      code: 400,
      status: "bad request",
      message: "Verification has already been passed",
    });
  }

  const { verificationToken } = user;

  await verificationEmail(email, verificationToken, sendEmail);

  res.status(200).json({
    code: 200,
    status: "success",
    message: "Verification email sent",
  });
}

module.exports = retryVerify;
