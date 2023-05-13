import * as jwt from "jsonwebtoken";
import env from "./../../../config/env";
import passportJWT from "passport-jwt";
import UserModel from "../../models/User";
import ForbiddenError from "../errors/types/ForbiddenError";

export interface JWTPayload {
  sub: string;
  iss: string;
  email: string;
}

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;

export function passportConfiguration(passport) {
  const opts = {
    secretOrKey: env.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
  };

  passport.use(
    new JwtStrategy(opts, async (jwtPayload, cb) => {
      const user = await UserModel.findOne({ where: { id: jwtPayload.id } });

      if (user) {
        if (!user.password === jwtPayload.password) {
          cb(new ForbiddenError("Outdate token"), false);
        } else {
          cb(null, { user });
        }
      } else {
        cb(new ForbiddenError("Token invalid"), false);
      }
    })
  );
}

export function generateToken(user: any) {
  return jwt.sign(
    { id: user.id, email: user.email, password: user.password },
    env.jwtSecret,
    {
      expiresIn: env.jwtExpiresIn,
    }
  );
}
