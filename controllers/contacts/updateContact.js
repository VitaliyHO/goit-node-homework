const { Contact } = require("../../models");

async function updateContact(req, res) {
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
}

module.exports = { updateContact };
