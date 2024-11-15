const { connection } = require("../../database/db");
const { DataTypes } = require("sequelize");

const User = connection.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("Member", "Admin"),
      defaultValue: "Member"
    },
  },
  { timestamps: false }
);

module.exports = User;
