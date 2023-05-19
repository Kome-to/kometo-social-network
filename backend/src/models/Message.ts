import { DataTypes, Model } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import sequelize from "../common/lib/Sequelize";

class MessageModel extends Model {
  declare id: string;
  declare toUser: string;
  declare fromUser: string;
  declare content: string;
  declare file: string;
  declare createdAt: string;
  declare updatedAt: string;
}

MessageModel.init(
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
    content: {
      type: DataTypes.STRING(),
    },
    file: {
      type: DataTypes.STRING(),
    },
  },
  {
    tableName: "message",
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

MessageModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default MessageModel;
