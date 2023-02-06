const { Contact } = require("../../models");

async function addContact(req, res) {
  const {_id} = req.user;
  const addedContact = await Contact.create({...req.body, owner: _id});
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: addedContact,
    },
  });
}

module.exports = { addContact };
