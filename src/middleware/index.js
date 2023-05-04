const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../users/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    }
    next();
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const comparePass = async (req, res, next) => {
  try {
    req.user = await User.findOne({ where: { username: req.body.username } });

    if (!req.user) { throw new Error("Password or username does not match") }

    const match = await bcrypt.compare(req.body.password, req.user.password);

    if (!match) { throw new Error("Password or username does not match") }

    next();
  } catch (error) {
    res.status(401).json({
      errorMessage: error.message,
      error: error
    });
  }
}

const tokenCheck = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) { throw new Error("No header, token, or user found") }

    const token = req.header("Authorization").replace("Bearer ", "");

    const dcToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({ where: { id: dcToken.id } });

    if (!user) { throw new Error("No header, token, or user found") }
    req.authUser = user;
    next();
  } catch (error) {
    res.status(501).json({
      errorMessage: error.message,
      error: error
    });
  }
}

module.exports = {
  hashPass,
  comparePass,
  tokenCheck
}