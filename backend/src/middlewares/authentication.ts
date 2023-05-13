import { NextFunction, Request, Response } from "express";
import passport from "passport";

import UnauthorizedError from "../common/errors/types/UnauthorizedError";
import messages from "../common/messages";

export default async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", {}, async (error, data, info) => {
    if (error) {
      return next(error);
    }

    if (data && data.user) {
      req.user = data.user.dataValues;
      return next();
    }

    return next(new UnauthorizedError(messages.auth.invalidToken));
  })(req, res, next);
};
