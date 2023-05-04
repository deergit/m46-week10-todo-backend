const User = require("./model");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
      console.log(req.body)
  
      const user = await User.create(req.body);
  
      res.status(201).json({ message: "success", user: { username: req.body.username } });
    } catch (error) {
      res.status(501).json({ message: "error", error: error });
    }
  };



  const loginUser = async (req, res) => {
    try{
      console.log("in login controller")
      console.log(req.user)

      const token = jwt.sign({ "id": req.user.id }, process.env.SECRET_KEY)
      console.log(token)
        res.status(200).json({ 
            message: "success", 
            user: {
                username: req.user.username,
                token: token
        }
    })
    } catch (error) {
        res.status(501).json({ message: "error", error:error });
    }
  }

  module.exports = {
    registerUser,
    loginUser
  }