const { Router } = require("express");
const actTodoRouter = Router();

const { addActiveTodo, deleteActiveTodo } = require("./controllers");
const { tokenCheck } = require("../middleware");

actTodoRouter.post("/activetodos/addtodo", tokenCheck, addActiveTodo);

actTodoRouter.delete("/activetodos/deleteactivetodo", tokenCheck, deleteActiveTodo);

module.exports = actTodoRouter;