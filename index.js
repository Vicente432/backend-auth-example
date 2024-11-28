const { checkConnection, syncModels } = require("./database/db");
const User = require("./api/models/user.model");

//require("dotenv").config()
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const port = 3000;

const checkAndSync = async () => {
  try {
    await checkConnection();
    await syncModels();
  } catch (error) {
    console.error(error);
  }
};

const initiliazeAndListen = () => {
  try {
    const app = express()
      .use(morgan("dev"))
      .use(express.json())
      .use(cors())
      .use("/api", require("./api/routes/index"))
      .listen(port, () => {
        console.log(`Listen on port: ${port}`);
      });
  } catch (error) {
    console.error(error);
  }
};

const startAPI = async () => {
  await checkAndSync();
  initiliazeAndListen();
};

startAPI();