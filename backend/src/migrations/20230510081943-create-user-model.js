module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("user", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: Sequelize.STRING(50),
        field: "first_name",
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(50),
        field: "last_name",
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT(),
      },
      phone: {
        type: Sequelize.STRING(50),
      },
      country: {
        type: Sequelize.STRING(50),
      },
      address: {
        type: Sequelize.STRING(50),
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING(),
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
    await queryInterface.dropTable("user");
  },
};
