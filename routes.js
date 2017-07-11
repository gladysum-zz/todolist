const express = require('express');
const router = express.Router();
module.exports = router;

const models = require('./models');
const Task = models.Task;

// Create a new task
router.post("/tasks", (req, res, next)=>{
  if (req.body.content === null) {
    res.status(404).message("content cannot be null")
  }
  else {
    Task.create(req.body.input)
    .then(task=>res.json(task))
    .catch(next);
  }
});



