import { Joi } from "express-validation";

export default {
  signup: {
    body: Joi.object({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().max(200).required(),
      confirmPassword: Joi.ref("password"),
    }),
  },

  login: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().max(200).required(),
    }),
  },

  changePassword: {
    body: Joi.object({
      currentPassword: Joi.string().max(200).required(),
      newPassword: Joi.string().max(200).required(),
      confirmPassword: Joi.ref("newPassword"),
    }),
  },
};
