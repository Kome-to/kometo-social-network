import { DataTypes, Model } from "sequelize";
import sequelize from "../common/lib/Sequelize";
import { v4 as uuidv4 } from "uuid";
import PostModel from "./Post";

class EventPostModel extends Model {
  declare id: string;
  declare userId: string;
  declare postId: string;
  declare eventType: string;
  declare content: string;
  declare post: PostModel;
}

EventPostModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: "CASCADE",
      field: "user_id",
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: "CASCADE",
      field: "post_id",
    },
    content: {
      type: DataTypes.TEXT,
    },
    file: {
      type: DataTypes.STRING(),
    },
  },
  {
    tableName: "event_post",
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

EventPostModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

EventPostModel.belongsTo(PostModel, { foreignKey: "post_id", as: "post" });
PostModel.hasMany(EventPostModel, { foreignKey: "post_id", as: "events" });

export default EventPostModel;
