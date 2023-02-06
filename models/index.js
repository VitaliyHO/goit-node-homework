const { Contact, joiSchema, favoriteJoiSchema } = require("./contact");
const { User, joiRegisterSchema } = require('./user');

module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema,
  User,
  joiRegisterSchema
};