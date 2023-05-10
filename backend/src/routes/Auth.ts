import express from "express";
import { validate } from "express-validation";
import AuthControllers from "../controllers/AuthControllers";
import validators from "../validators/Auth";
import wrapper from "../common/helpers/wrapper";

const router = express.Router();

router.post(
  "/sign-up",
  validate(validators.signup),
  wrapper(AuthControllers.signUp)
);
router.post(
  "/login",
  validate(validators.login),
  wrapper(AuthControllers.login)
);

export default router;
