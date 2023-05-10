import UserModel from "./../models/User";
import Bcrypt from "../common/lib/Bcrypt";
import response from "../common/helpers/response";
import ConflictError from "../common/errors/types/ConflictError";
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
      res.status(401).json({ error: "Wrong email" });
    }

    const isMatch = Bcrypt.comparePassword(existUser.password, body.password);

    if (!isMatch) {
      res.status(401).json({ error: "Password not correct" });
    }
    res.status(200).json({ user: existUser });
  };
}

export default new AuthControllers();
