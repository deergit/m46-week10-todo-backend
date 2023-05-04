const ActiveTodo = require("./model");
const jwt = require("jsonwebtoken");


const addActiveTodo = async (req, res) => {
    try {
      console.log(req.body)
  
      const actTodo = await ActiveTodo.create(req.body);
  
      res.status(201).json({ message: "success", actTodo: actTodo });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }
  };


  const deleteActiveTodo = async (req, res) => {
    try{
        console.log(req.body)

        const delTodo = await ActiveTodo.destroy({ where: {activeTodo: req.body.activeTodo} });

        res.status(201).json({ message: "success", delTodo: delTodo });
    } catch (error) {
      res.status(501).json({ errorMessage: error.message, error: error });
    }        
}

  module.exports = {
    addActiveTodo,
    deleteActiveTodo
  }