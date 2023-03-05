const express = require('express');
const { validation, controlWrapper, tokenValidation, upload } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { joiRegisterSchema } = require('../../models');


const router = express.Router();

router.post("/register", validation(joiRegisterSchema), controlWrapper(ctrl.register));

router.get("/verify/:verificationToken", controlWrapper(ctrl.verifyEmail));

router.post("/login", validation(joiRegisterSchema), controlWrapper(ctrl.login));

router.get("/current", tokenValidation, controlWrapper(ctrl.getCurrent));

router.get("/logout", tokenValidation, controlWrapper(ctrl.logout));

router.patch("/avatars", tokenValidation, upload.single('avatar'), controlWrapper(ctrl.updateAvatar));


module.exports = router;