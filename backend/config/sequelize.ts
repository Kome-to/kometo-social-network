const createSequelizeConfigForEnv = () => {
  return {
    development: {
      username: "postgres",
      password: "kometo",
      database: "kometo",
      host: "localhost",
      pool: undefined,
      dialect: "postgres",
      port: 5432,
      timezone: "+00:00",
    },
  };
};

// Needs to be `module.exports` as required by Sequelize CLI
// http://docs.sequelizejs.com/manual/migrations.html#configuration
module.exports = createSequelizeConfigForEnv();
