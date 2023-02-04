const { Contact } = require("../../models");

async function removeContact(req, res) {
  const { contactId } = req.params;
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

module.exports = { removeContact };
