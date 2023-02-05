const { Contact } = require("../../models");

async function updateFavStat(req, res) {
  const { _id } = req.user;
  const { contactId } = req.params;
  const { favorite } = req.body;

  const contact = await Contact.find({ owner: _id, _id: contactId });

  if (!contact.length) {
    res.status(404).json({
      status: "not found",
      code: 404,
      data: {
        message: "Not found",
      },
    });
  } else {
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
}

module.exports = { updateFavStat };
