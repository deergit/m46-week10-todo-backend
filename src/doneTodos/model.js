const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const DoneTodo = connection.define("DoneTodo", {
  doneTodo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  }
});

module.exports = DoneTodo;