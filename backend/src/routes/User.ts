import express from "express";
import { validate } from "express-validation";
import AuthControllers from "../controllers/AuthControllers";
import validators from "../validators/Auth";
import wrapper from "../common/helpers/wrapper";
import authentication from "../middlewares/authentication";

const router = express.Router();

router.post(
  "/test",
  [authentication],
  validate(validators.changePassword),
  wrapper(AuthControllers.changePassword)
);

export default router;
