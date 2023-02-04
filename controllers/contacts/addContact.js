const { Contact } = require("../../models");

async function addContact(req, res) {
  const addedContact = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: addedContact,
    },
  });
}

module.exports = { addContact };
