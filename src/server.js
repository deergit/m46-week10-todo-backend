require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5001;

const User = require("./users/model");
const DoneTodo = require("./doneTodos/model");
const ActiveTodo = require("./activeTodos/model");

const userRouter = require("./users/routes");
const doneTodoRouter = require("./doneTodos/routes");
const actTodoRouter = require("./activeTodos/routes");

const app = (express());
app.use(cors())

app.use(express.json());

const syncTables = () => {

    ActiveTodo.belongsTo(User);
    DoneTodo.belongsTo(User);
    User.hasMany(DoneTodo);
    User.hasMany(ActiveTodo);

    User.sync();
    DoneTodo.sync();
    ActiveTodo.sync();
}

app.use(userRouter);
app.use(doneTodoRouter);
app.use(actTodoRouter);

app.get("/health", (req, res) => {
    res.status(200).json({ message: "api is working" })
});

app.listen(port, () => {
    syncTables()
    console.log(`Server is running on port ${port}`)
});