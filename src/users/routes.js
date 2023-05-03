const { Router } = require("express");
const userRouter = Router();

const { registerUser, loginUser } = require("./controllers");
const { hashPass, comparePass, tokenCheck } = require("../middleware");

userRouter.post("/users/register", hashPass, registerUser);

userRouter.post("/users/login", comparePass, loginUser);

userRouter.get("/users/authcheck", tokenCheck, loginUser);

module.exports = userRouter;