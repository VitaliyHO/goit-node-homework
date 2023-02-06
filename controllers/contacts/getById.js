const { Contact } = require("../../models");

async function getById(req, res) {
  const _id = req.user;
  const { contactId } = req.params;
  const wantedContact = await Contact.find({owner: _id, _id: contactId}).populate("owner", "_id email");
  if (!wantedContact || !wantedContact.length) {
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
