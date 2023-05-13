import { DataTypes, Model } from "sequelize";
import sequelize from "../common/lib/Sequelize";
import UserModel from "./User";

class FriendModel extends Model {
  declare id: string;
  declare toUser: string;
  declare fromUser: string;
  declare isAccept: string;
}

FriendModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    toUser: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: "CASCADE",
      field: "to_user",
    },
    fromUser: {
      type: DataTypes.UUID,
      allowNull: false,
      onDelete: "CASCADE",
      field: "from_user",
    },
    isAccept: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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

// UserModel.hasMany(FriendModel, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
//   hooks: true,
//   as: "friend",
// });

FriendModel.belongsTo(UserModel, { foreignKey: "id" });

export default FriendModel;
