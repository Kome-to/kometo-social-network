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

  postEvent: {
    body: Joi.object({
      postId: Joi.string().required(),
      eventType: Joi.string().valid("LIKE", "COMMENT", "SHARE").required(),
      content: Joi.string().allow("", null),
      fileName: Joi.string(),
    }),
  },

  deleteEvent: {
    body: Joi.object({
      postId: Joi.string().required(),
      eventType: Joi.string().valid("LIKE", "COMMENT", "SHARE").required(),
    }),
  },
};
