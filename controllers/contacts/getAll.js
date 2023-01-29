const { Contact } = require("../../models");

async function getAll(req, res) {
  const contacts = await Contact.find({});
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
}

module.exports = { getAll };
