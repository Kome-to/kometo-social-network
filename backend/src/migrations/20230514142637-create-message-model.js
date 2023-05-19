"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable("message", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      toUser: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: { tableName: "user" },
          key: "id",
        },
        field: "to_user",
      },
      fromUser: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: { tableName: "user" },
          key: "id",
        },
        field: "from_user",
      },
      content: {
        type: Sequelize.TEXT,
      },
      file: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable("message");
  },
};
