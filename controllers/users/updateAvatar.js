const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "..", "..", "public", "avatars");

async function updateAvatar(req, res) {
  const { _id } = req.user;
  const { path: tmpUpload, originalname } = req.file;

  const avaName = _id + "_" + originalname;
  const resultUpload = path.join(avatarDir, avaName);

  try {
    await fs.rename(tmpUpload, resultUpload);
    Jimp.read(resultUpload, (err, img) => {
      if (err) {
        throw err;
      }
      img.resize(250, 250).quality(60).write(resultUpload);
    });
    const avatarURL = path.join("public", "avatars", avaName);
    const user = await User.findByIdAndUpdate(_id, { avatarURL });
    if (!user) {
      res.status(401).json({
        code: 401,
        status: "unauthorized",
        message: "Not authorized",
      });
    }

    res.status(200).json({
      code: 200,
      status: "success",
      avatarURL,
    });
  } catch (error) {
    await fs.unlink(tmpUpload);
    throw error;
  }
}

module.exports = updateAvatar;
