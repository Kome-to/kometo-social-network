import { Sequelize } from "sequelize";
import pg from "pg";

const { database } = {
  database: {
    database: "kometo",
    username: "postgres",
    password: "kometo",
    host: "localhost",
    port: 5432,
  },
};

export default new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    dialectModule: pg,
    host: database.host,
    port: database.port,
    dialect: "postgres",
  }
);
