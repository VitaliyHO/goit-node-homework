const { Contact, joiSchema, favoriteJoiSchema } = require("./contact");
const { User, joiRegisterSchema, joiVerifySchema } = require("./user");

module.exports = {
  Contact,
  joiSchema,
  favoriteJoiSchema,
  User,
  joiRegisterSchema,
  joiVerifySchema,
};
