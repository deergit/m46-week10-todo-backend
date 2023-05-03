const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const ActiveTodo = connection.define("ActiveTodo", {
  activeTodo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  }
});

module.exports = ActiveTodo;