import { DataTypes, Model } from "sequelize";
import sequelize from "../common/lib/Sequelize";
import UserModel from "./User";
import { v4 as uuidv4 } from "uuid";

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
  },
  {
    tableName: "friend",
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

UserModel.hasMany(FriendModel, {
  foreignKey: "to_user",
  onDelete: "CASCADE",
  hooks: true,
  as: "friend",
});

FriendModel.belongsTo(UserModel, { foreignKey: "to_user" });

FriendModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default FriendModel;
