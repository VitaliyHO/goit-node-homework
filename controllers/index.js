const { getAll } = require("./contacts/getAll");
const { getById } = require("./contacts/getById");
const { addContact } = require("./contacts/addContact");
const { removeContact } = require("./contacts/removeContact");
const { updateContact } = require("./contacts/updateContact");
const { updateFavStat } = require("./contacts/updateFavStat");

module.exports = {
  getAll,
  getById,
  addContact,
  removeContact,
  updateContact,
  updateFavStat,
};
