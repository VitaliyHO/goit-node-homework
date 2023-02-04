const { Contact } = require("../../models");

async function updateContact(req, res) {
  const { contactId } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!updatedContact) {
    res.status(404).json({ message: "Not found" });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: updatedContact,
    },
  });
}

module.exports = { updateContact };
