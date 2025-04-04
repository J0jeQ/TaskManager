const mongoose = require('mongoose');

const TasksSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
    maxLength: 24
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model("Task", TasksSchema);

module.exports = Task;