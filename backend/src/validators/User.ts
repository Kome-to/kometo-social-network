import { Joi } from "express-validation";

export default {
  createPost: {
    body: Joi.object({
      createPostContent: Joi.string(),
    }),
  },

  updateMe: {
    body: Joi.object({
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string(),
      phone: Joi.string(),
      country: Joi.string(),
      address: Joi.string(),
      description: Joi.string(),
      fileName: Joi.string(),
    }),
  },

  requestFriend: {
    body: Joi.object({
      id: Joi.string().required(),
      action: Joi.string().required().valid("accept", "request", "cancel"),
    }),
  },
};
