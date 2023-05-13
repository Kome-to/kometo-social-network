import { has } from "lodash";
import env from "../../config/env";
import BadRequestError from "../common/errors/types/BadRequestError";
import response from "../common/helpers/response";
import UserModel from "../models/User";
import PostModel from "./../models/Post";
import FriendModel from "../models/Friend";
import withTransaction from "./../common/hooks/withTransaction";

class UserControllers {
  public getMe = async (req, res) => {
    const { user } = req;

    const existUser = await UserModel.findOne({ where: { id: user.id } });

    if (!existUser) {
      throw new BadRequestError("User not exist");
    }

    response.success(res, {
      ...user,
      avatar: user.avatar
        ? `${env.baseApiUrl}/file/${user.id}/${user.avatar}`
        : null,
    });
  };

  public updateMe = async (req, res) => {
    const { user, body } = req;

    const existUser = await UserModel.findOne({ where: { id: user.id } });

    if (!existUser) {
      throw new BadRequestError("User not exist");
    }

    const updateUser: any = {};

    if (has(body, "fileName")) {
      updateUser.avatar = body.fileName;
    }

    if (has(body, "firstName")) {
      updateUser.firstName = body.firstName;
    }

    if (has(body, "lastName")) {
      updateUser.lastName = body.lastName;
    }

    if (has(body, "email")) {
      updateUser.email = body.email;
    }

    if (has(body, "phone")) {
      updateUser.phone = body.phone;
    }

    if (has(body, "country")) {
      updateUser.country = body.country;
    }

    if (has(body, "address")) {
      updateUser.address = body.address;
    }

    if (has(body, "description")) {
      updateUser.description = body.description;
    }

    await UserModel.update({ ...updateUser }, { where: { id: user.id } });

    response.success(res);
  };

  public createPost = async (req, res) => {
    const { createPostContent, fileName } = req.body;

    if (!createPostContent && !fileName) {
      throw new BadRequestError("Empty post");
    }

    await PostModel.create({
      userId: req.user.id,
      content: createPostContent,
      file: fileName,
    });

    response.success(res);
  };

  public getPost = async (req, res) => {
    const { user } = req;

    const posts = await PostModel.findAll({
      where: { userId: user.id },
      include: [
        {
          model: UserModel,
          as: "post_user",
          required: false,
        },
      ],
    });

    const postUser = posts.map((post) => {
      return {
        id: post.id,
        userId: post.userId,
        content: post.content,
        file: `${env.baseApiUrl}/file/${user.id}/${post.file}`,
        firstName: post.post_user.firstName,
        lastName: post.post_user.lastName,
        avatar: `${env.baseApiUrl}/file/${user.id}/${post.post_user.avatar}`,
      };
    });

    response.success(res, postUser);
  };

  public getSuggestFriends = async (req, res) => {
    const { user } = req;

    let suggestFriends;
    withTransaction(async (trans) => {
      suggestFriends = await FriendModel.findAll({
        where: { id: user.id },
        include: {
          model: UserModel,
          as: "friend",
          required: false,
        },
      });
    });
    response.success(res, suggestFriends);
  };
}

export default new UserControllers();
