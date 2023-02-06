const Joi = require("joi");
const { model, Schema } = require("mongoose");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: { type: String, default: null },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  password: Joi.string().min(6).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  subscription: {
    type: String,
  },
});

const User = model("user", userSchema);

module.exports = {
  joiRegisterSchema,
  User,
};
