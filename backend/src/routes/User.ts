import express from "express";
import wrapper from "../common/helpers/wrapper";
import UserControllers from "../controllers/UserControllers";
import fileUpload from "./../middlewares/file-upload";
import multer from "multer";
import authentication from "../middlewares/authentication";

const router = express.Router();

const fileUploadSingle = fileUpload.multerUpload().single("file");

router.post(
  "/upload",
  [authentication],
  [fileUploadSingle],
  wrapper(UserControllers.test)
);

export default router;
