import * as jwt from "jsonwebtoken";
import env from "./../../../config/env";
import passportJWT from "passport-jwt";

export interface JWTPayload {
  sub: string;
  iss: string;
  email: string;
}

const TOKEN_SIGN_ALGORITHM = "HS256";
const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;

export function passportConfiguration(passport) {
  const opts = {
    secretOrKey: env.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
  };

  passport.use(
    new JwtStrategy(opts, async (jwtPayload, cb) => {
      cb(new Error("Something wrong in token"), false);
    })
  );
}

export function generateToken(user: any) {
  return jwt.sign(
    { id: user.id, email: user.email, passwordUpdateAt: user.passwordUpdateAt },
    env.jwtSecret,
    {
      expiresIn: user.sessionExpire
        ? `${user.sessionExpire}h`
        : env.jwtExpiresIn,
    }
  );
}
