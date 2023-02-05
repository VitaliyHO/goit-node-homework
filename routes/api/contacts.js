const express = require("express");
const {tokenValidation, validation, controlWrapper } = require('../../middlewares');
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", tokenValidation, controlWrapper(ctrl.getAll));

router.get("/:contactId", tokenValidation, controlWrapper(ctrl.getById));

router.post("/", tokenValidation, validation(joiSchema), controlWrapper(ctrl.addContact));

router.delete("/:contactId", tokenValidation, controlWrapper(ctrl.removeContact));

router.put("/:contactId", tokenValidation, validation(joiSchema), controlWrapper(ctrl.updateContact));

router.patch("/:contactId/favorite", tokenValidation, validation(favoriteJoiSchema), controlWrapper(ctrl.updateFavStat))

module.exports = router;
