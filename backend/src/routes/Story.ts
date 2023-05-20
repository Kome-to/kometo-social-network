import express from "express";
import fileUpload from "../middlewares/file-upload";
import authentication from "../middlewares/authentication";
import wrapper from "../common/helpers/wrapper";
import StoryControllers from "../controllers/StoryControllers";

const router = express.Router();

const fileUploadSingle = fileUpload.multerUpload().single("file");

router.post(
  "/",
  [authentication],
  [fileUploadSingle],
  wrapper(StoryControllers.createStory)
);

router.get("/", [authentication], wrapper(StoryControllers.getStory));

export default router;
