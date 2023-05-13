import { DataTypes, Model } from "sequelize";
import sequelize from "../common/lib/Sequelize";
import { v4 as uuidv4 } from "uuid";
import FriendModel from "./Friend";

class UserModel extends Model {
  declare id: string;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
  declare avatar: string;
  declare phone: string;
  declare country: string;
  declare address: string;
  declare description: string;
  declare friend: FriendModel;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "first_name",
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: "last_name",
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(50),
    },
    address: {
      type: DataTypes.STRING(50),
    },

    country: {
      type: DataTypes.STRING(50),
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(),
    },
    description: {
      type: DataTypes.TEXT(),
    },
  },
  {
    tableName: "user",
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);


UserModel.beforeCreate((instance) => {
  instance.id = uuidv4();
  instance.email = instance.email.toLowerCase().trim();
});

UserModel.beforeUpdate((instance) => {
  instance.email = instance.email.toLowerCase().trim();
});

export default UserModel;
