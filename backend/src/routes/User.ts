import express from "express";
import wrapper from "../common/helpers/wrapper";
import UserControllers from "../controllers/UserControllers";
import authentication from "../middlewares/authentication";
import fileUpload from "./../middlewares/file-upload";
import validators from "../validators/User";
import { validate } from "express-validation";

const router = express.Router();

const fileUploadSingle = fileUpload.multerUpload().single("file");

router.post(
  "/post",
  [authentication],
  validate(validators.createPost),
  [fileUploadSingle],
  wrapper(UserControllers.createPost)
);

router.get("/post", [authentication], wrapper(UserControllers.getPost));
router.get(
  "/suggest-friend",
  [authentication],
  wrapper(UserControllers.getSuggestFriends)
);
router.post(
  "/request-friend",
  [authentication],
  validate(validators.requestFriend),
  wrapper(UserControllers.requestFriend)
);

router.delete(
  "/post-event",
  [authentication],
  validate(validators.deleteEvent),
  wrapper(UserControllers.deleteEvent)
);

router.post(
  "/post-event",
  [authentication],
  [fileUploadSingle],
  validate(validators.postEvent),
  wrapper(UserControllers.postEvent)
);

router.get("/media", [authentication], wrapper(UserControllers.getMedia));
router.post(
  "/message",
  [authentication],
  validate(validators.createMessage),
  wrapper(UserControllers.createMessage)
);
router.get("/message", [authentication], wrapper(UserControllers.getMessage));
router.get("/me", [authentication], wrapper(UserControllers.getMe));
router.post(
  "/me",
  [authentication],
  [fileUploadSingle],
  validate(validators.updateMe),
  wrapper(UserControllers.updateMe)
);

export default router;
