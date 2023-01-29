const { Contact } = require("../../models");

async function updateFavStat(req, res) {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const updatedFavorite = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );

  if (!updatedFavorite) {
    res.status(404).json({ message: "Not found" });
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result: updatedFavorite,
    },
  });
}

module.exports = { updateFavStat };
