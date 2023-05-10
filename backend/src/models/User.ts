import { DataTypes, Model } from "sequelize";
import sequelize from "../common/lib/Sequelize";
import { v4 as uuidv4 } from 'uuid';

class UserModel extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
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
