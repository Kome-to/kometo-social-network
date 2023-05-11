import { Request } from "express";
import multer from "multer";
import path from "path";

import BadRequestError from "../common/errors/types/BadRequestError";
import fileHelper from "../common/helpers/file";
import messages from "../common/messages";

const storage = (storageFolder: string) =>
  multer.diskStorage({
    destination: (req: Request, _file, cb) => {
      const { user } = req as { user: any };
        const relativePath = `${storageFolder}/${user.id}`;
        fileHelper.createFolderIfNotExists(relativePath);
        cb(null, `${process.cwd()}/${relativePath}`);
    },
    filename: (req, file, cb) => {
      const fileName = `${new Date().getTime()}${`${Math.random()}`.slice(
        -3
      )}${path.extname(file.originalname)}`;
      req.body.fileName = fileName;
      cb(null, fileName);
    },
  });

const multerUpload = () =>
  multer({
    // dest: "assets",
    storage: storage("assets"),
  });

export default {
  storage,
  multerUpload,
};
