const { Sequelize } = require("sequelize");

const connection = new Sequelize("restAPIDB", "alma", "reboot", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
});

const checkConnection = async () => {
  try {
    await connection.authenticate();
    console.log("Esto tira");
  } catch (error) {
    throw new Error(error);
  }
};

const syncModels = async () => {
  try {
    await connection.sync();
    console.log("Models sync");
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  connection,
  checkConnection,
  syncModels,
};
