const { Router } = require("express");
const userRouter = Router();

const { registerUser, loginUser } = require("./controllers");
const { hashPass, checkPass, checkToken } = require("../middleware");

userRouter.post("/users/register", hashPass, registerUser);

userRouter.post("/users/login", checkPass, loginUser);

userRouter.get("/users/authcheck", checkToken, loginUser);

module.exports = userRouter;