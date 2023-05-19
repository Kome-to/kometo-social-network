import { DataTypes, Model } from "sequelize";
import sequelize from "../common/lib/Sequelize";
import { v4 as uuidv4 } from "uuid";
import UserModel from "./User";
import EventPostModel from "./EventPost";

class PostModel extends Model {
  declare id: string;
  declare userId: string;
  declare content: string;
  declare file: string;
  declare post_user: UserModel;
  declare events: EventPostModel;
}

PostModel.init(
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
    content: {
      type: DataTypes.TEXT,
    },
    file: {
      type: DataTypes.STRING(),
    },
  },
  {
    tableName: "post",
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

PostModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

PostModel.belongsTo(UserModel, { foreignKey: "user_id", as: "post_user" });

export default PostModel;
