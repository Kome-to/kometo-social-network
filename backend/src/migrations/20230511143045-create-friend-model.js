module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("friend", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      fromUser: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "user",
          },
          key: "id",
        },
        field: "from_user",
        onDelete: 'CASCADE',
      },
      toUser: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "user",
          },
          key: "id",
        },
        field: "to_user",
        onDelete: 'CASCADE',
      },
      isAccept: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        field: "is_accept",
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
    await queryInterface.dropTable("friend");
  },
};
