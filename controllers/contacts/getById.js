const { Contact } = require("../../models");

async function getById(req, res) {
  const { contactId } = req.params;
  const wantedContact = await Contact.findById(contactId);
  if (!wantedContact) {
    res.json({
      status: "not found",
      code: 404,
      data: {
        message: "Not found",
      },
    });
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: wantedContact,
    },
  });
}

module.exports = { getById };
