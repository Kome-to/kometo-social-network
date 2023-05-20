import dayjs from "dayjs";
import env from "../../config/env";
import response from "../common/helpers/response";
import StoryModel from "../models/Story";
import UserModel from "../models/User";
import withTransaction from "./../common/hooks/withTransaction";

class StoryControllers {
  public createStory = async (req, res) => {
    const { fileName } = req.body;

    await withTransaction(async (trans) => {
      await StoryModel.create({ userId: req.user.id, file: fileName });
    });
    response.success(res);
  };

  public getStory = async (req, res) => {
    const stories = await StoryModel.findAll({
      include: {
        model: UserModel,
        as: "user",
      },
    });

    response.success(
      res,
      stories
        .sort((a: any, b: any) =>
          dayjs(a.updatedAt).diff(b.updatedAt) < 0 ? 1 : -1
        )
        .map((story) => ({
          id: story.id,
          file: `${env.baseApiUrl}/file/${req.user.id}/${story.file}`,
          userId: story.userId,
          firstName: story.user.firstName,
          lastName: story.user.lastName,
          avatar: `${env.baseApiUrl}/file/${req.user.id}/${story.user.avatar}`,
          updatedAt: story.updatedAt,
        }))
    );
  };
}

export default new StoryControllers();
