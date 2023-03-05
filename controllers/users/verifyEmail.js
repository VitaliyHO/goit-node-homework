const { User } = require("../../models");

async function verifyEmail(req, res) {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    res.status(404).json({
      code: 404,
      status: "not found",
      message: "User not found",
    });
  }

  await User.findOneAndUpdate(
    { verificationToken },
    { verify: true, verificationToken: null }
  );

  res.status(200).json({
    code: 200,
    status: 'sucess',
    message: 'Verification successful'
  })
}

module.exports = verifyEmail;