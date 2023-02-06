const { getAll } = require("./getAll");
const { getById } = require("./getById");
const { addContact } = require("./addContact");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");
const { updateFavStat } = require("./updateFavStat");

module.exports = {
    getAll,
    getById,
    addContact,
    removeContact,
    updateContact,
    updateFavStat,
  };