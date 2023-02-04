const express = require("express");
const { validation, controlWrapper } = require('../../middlewares');
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const { getAll, getById, addContact, removeContact, updateContact, updateFavStat } = require("../../controllers");

const router = express.Router();

router.get("/", controlWrapper(getAll));

router.get("/:contactId", controlWrapper(getById));

router.post("/", validation(joiSchema), controlWrapper(addContact));

router.delete("/:contactId", controlWrapper(removeContact));

router.put("/:contactId", validation(joiSchema), controlWrapper(updateContact));

router.patch("/:contactId/favorite", validation(favoriteJoiSchema), controlWrapper(updateFavStat))

module.exports = router;
