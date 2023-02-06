const { Contact } = require("../../models");

async function removeContact(req, res) {
  const { _id } = req.user;
  const { contactId } = req.params;

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
    const deletedContact = await Contact.findByIdAndRemove(contactId);
    if (!deletedContact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json({
      status: "success",
      code: 200,
      message: `Contact '${deletedContact.name}' was deleted`,
    });
  }
}

module.exports = { removeContact };
