const express = require('express');
const router = express.Router();
module.exports = router;

const models = require('./models');
const Task = models.Task;

// Retrieve all tasks from database
router.get('/tasks', (req, res, next) => {
	Task.findAll()
	.then(tasks => res.json(tasks))
	.catch(next);
});

// Create a new task
router.post('/tasks', (req, res, next) => {
  Task.create({content: req.body.input})
  .then(task => res.json(task))
  .catch(next);
});

// Delete a task
router.delete('/tasks/:id', (req, res, next) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
	})
	.then(task => {  
		res.status(204).end();
	})
	.catch(next);
});

// Update a task
router.put('/tasks/:id', (req, res, next) => {
	Task.update(req.body, {
		where: {
			id: req.params.id
		}
	})
	.then(task => res.json(task))
	.catch(next);
});



