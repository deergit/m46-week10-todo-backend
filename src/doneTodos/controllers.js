const DoneTodo = require("./model");
const jwt = require("jsonwebtoken");


const addDoneTodo = async (req, res) => {
    try {
      console.log(req.body)
  
      const todo = await DoneTodo.create(req.body);
  
      res.status(201).json({ message: "success", todo: { doneTodo: req.body.doneTodo } });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }
  };


const deleteDoneTodo = async (req, res) => {
    try{
        console.log(req.body)

        const delTodo = await DoneTodo.destroy({ where: { doneTodo: req.body.doneTodo } });

        res.status(201).json({ message: "success", delTodo: delTodo });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }        
}



  module.exports = {
    addDoneTodo,
    deleteDoneTodo
  }