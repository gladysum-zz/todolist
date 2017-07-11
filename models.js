var Sequelize = require("sequelize");
var db = new Sequelize("postgres://localhost:5432/todolist");

// The Task Model
var Task = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {notEmpty: true}
  }
});


module.exports = {
  Task: Task,
  db: db
}
