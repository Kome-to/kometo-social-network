import response from "../common/helpers/response";

class UserControllers {
  public test = async (req, res) => {
    const { body } = req;

    response.success(res);
  };
}

export default new UserControllers();
