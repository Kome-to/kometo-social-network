import ConflictError from "../common/errors/types/ConflictError";
import ForbiddenError from "../common/errors/types/ForbiddenError";
import response from "../common/helpers/response";
import Bcrypt from "../common/lib/Bcrypt";
import UserModel from "./../models/User";
import { generateToken } from "../common/lib/passports";
class AuthControllers {
  public signUp = async (req, res) => {
    const { body } = req;
    const existsEmail = await UserModel.findOne({
      where: { email: body.email },
    });

    if (existsEmail) {
      throw new ConflictError("Email exist");
    }

    const hastPassword = Bcrypt.generateHashPassword(body.password);
    const newUser = {
      name: body.name,
      email: body.email,
      password: hastPassword,
      confirmPassword: body.password,
    };
    await UserModel.create(newUser);
    response.success(res);
  };

  public login = async (req, res) => {
    const { body } = req;
    console.log(body);

    const existUser = await UserModel.findOne({ where: { email: body.email } });
    if (!existUser) {
      throw new ForbiddenError("Email not exist");
    }

    const isMatch = Bcrypt.comparePassword(body.password, existUser.password);

    if (!isMatch) {
      throw new ForbiddenError("Wrong password");
    }

    const token = generateToken(existUser);
    response.success(res, { token });
  };
}

export default new AuthControllers();
