import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import sequelize from "../common/lib/Sequelize";
import UserModel from "./User";

class StoryModel extends Model {
  declare id: string;
  declare userId: string;
  declare file: string;
  declare user: UserModel;
  declare createdAt: string;
  declare updatedAt: string;
}

StoryModel.init(
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
    file: {
      type: DataTypes.STRING(),
    },
  },
  {
    tableName: "story",
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

StoryModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

StoryModel.belongsTo(UserModel, { foreignKey: "user_id", as: "user" });

export default StoryModel;
