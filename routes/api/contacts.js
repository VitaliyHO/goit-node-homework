const express = require("express");
const { validation, controlWrapper } = require('../../middlewares');
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", controlWrapper(ctrl.getAll));

router.get("/:contactId", controlWrapper(ctrl.getById));

router.post("/", validation(joiSchema), controlWrapper(ctrl.addContact));

router.delete("/:contactId", controlWrapper(ctrl.removeContact));

router.put("/:contactId", validation(joiSchema), controlWrapper(ctrl.updateContact));

router.patch("/:contactId/favorite", validation(favoriteJoiSchema), controlWrapper(ctrl.updateFavStat))

module.exports = router;
