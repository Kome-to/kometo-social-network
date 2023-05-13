import { has } from "lodash";
import { Op } from "sequelize";
import env from "../../config/env";
import BadRequestError from "../common/errors/types/BadRequestError";
import response from "../common/helpers/response";
import FriendModel from "../models/Friend";
import UserModel from "../models/User";
import withTransaction from "./../common/hooks/withTransaction";
import PostModel from "./../models/Post";
import EventPostModel from "../models/EventPost";

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

    let posts = [];
    await withTransaction(async () => {
      posts = await PostModel.findAll({
        where: { userId: user.id },
        include: [
          {
            model: UserModel,
            as: "post_user",
            required: false,
          },
          { model: EventPostModel, as: "events", required: false },
        ],
      });
    });

    const postUser = posts.map((post) => {
      return {
        id: post.id,
        userId: post.userId,
        content: post.content,
        file: `${env.baseApiUrl}/file/${user.id}/${post.file}`,
        firstName: post.post_user.firstName,
        lastName: post.post_user.lastName,
        likes: post.events.filter((event) => event.eventType === "LIKE"),
        comments: post.events.filter((event) => event.eventType === "COMMENT"),
        avatar: `${env.baseApiUrl}/file/${user.id}/${post.post_user.avatar}`,
      };
    });

    response.success(res, postUser);
  };

  public getSuggestFriends = async (req, res) => {
    const { user } = req;

    const suggestFriends = [];
    await withTransaction(async (trans) => {
      const list = await FriendModel.findAll({
        where: {
          [Op.or]: [{ toUser: user.id }, { fromUser: user.id }],
        },
      });

      const handleStatus = list.map((people) =>
        people.toUser === user.id
          ? people.isAccept
            ? { id: people.fromUser, status: 0 }
            : { id: people.fromUser, status: 1 }
          : people.isAccept
          ? { id: people.toUser, status: 0 }
          : { id: people.toUser, status: 2 }
      );

      const suggests = await UserModel.findAll({
        where: {
          id: {
            [Op.notIn]: [...handleStatus.map((item) => item.id), user.id],
          },
        },
      });

      const requests = await UserModel.findAll({
        where: {
          id: {
            [Op.in]: [
              ...handleStatus
                .filter((item) => item.status === 1)
                .map((item) => item.id),
            ],
          },
        },
      });

      const pending = await UserModel.findAll({
        where: {
          id: {
            [Op.in]: [
              ...handleStatus
                .filter((item) => item.status === 2)
                .map((item) => item.id),
            ],
          },
        },
      });

      suggestFriends.push(
        ...suggests.map((suggest) => ({
          id: suggest.id,
          firstName: suggest.firstName,
          lastName: suggest.lastName,
          avatar: `${env.baseApiUrl}/file/${suggest.id}/${suggest.avatar}`,
          status: 0,
        })),
        ...requests.map((suggest) => ({
          id: suggest.id,
          firstName: suggest.firstName,
          lastName: suggest.lastName,
          avatar: `${env.baseApiUrl}/file/${suggest.id}/${suggest.avatar}`,
          status: 1,
        })),
        ...pending.map((suggest) => ({
          id: suggest.id,
          firstName: suggest.firstName,
          lastName: suggest.lastName,
          avatar: `${env.baseApiUrl}/file/${suggest.id}/${suggest.avatar}`,
          status: 3,
        }))
      );
    });

    response.success(
      res,
      suggestFriends.sort((a, b) => (a.id > b.id ? 1 : -1))
    );
  };
  public requestFriend = async (req, res) => {
    const { id, action } = req.body;
    const existUser = await UserModel.findOne({ where: { id } });
    const existRequest = await FriendModel.findOne({
      where: {
        [Op.or]: [
          { toUser: req.user.id, fromUser: id },
          { toUser: id, fromUser: req.user.id },
        ],
      },
    });

    switch (action) {
      case "request": {
        if (!existUser || existRequest) {
          throw new BadRequestError("Something wrong");
        }

        await withTransaction(async (trans) => {
          await FriendModel.create({
            toUser: req.user.id,
            fromUser: id,
            isAccept: false,
          });
        });
        break;
      }
      case "cancel": {
        await withTransaction(async (trans) => {
          await existRequest.destroy();
        });
        break;
      }
      case "accept": {
        await existRequest.update({ isAccept: true });
        break;
      }
      default:
        break;
    }
    response.success(res);
  };
}

export default new UserControllers();
