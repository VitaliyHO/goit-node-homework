const validation = require("./validator");
const { controlWrapper } = require("./controlWrapper");
const tokenValidation = require('./tokenValidation');
const upload = require('./upload')

module.exports = { validation, controlWrapper, tokenValidation, upload };
