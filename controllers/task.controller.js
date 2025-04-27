const mongoose = require('mongoose');
const Task = require('../models/task.model');
const { connectDB, disconnectDB } = require('../config/DBconnection');

async function getAllTasks(req, res) {
  try {
    await connectDB();
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    disconnectDB();
  }
}

async function getTaskById(req, res) {
  try {
    await connectDB();
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send("Nie znaleziono zadania o podanym ID");
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    disconnectDB();
  }
}

async function deleteTask(req, res) {
  try {
    await connectDB();
    const result = await Task.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send("Nie znaleziono zadania do usunięcia");
    }
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    disconnectDB();
  }
}

async function createTask(req, res) {
  try {
    await connectDB();
    const newTask = new Task({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      done: req.body.done || false
    });
    await newTask.save();
    res.status(201).send("Dodano zadanie");
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    disconnectDB();
  }
}

async function updateTask(req, res) {
  try {
    await connectDB();
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },  
      { new: true }        
    );

    if (!updatedTask) {
      return res.status(404).send("Nie znaleziono zadania do aktualizacji");
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).send(err.message);
  } finally {
    disconnectDB();
  }
}
module.exports = {
  getAllTasks,
  getTaskById,
  deleteTask,
  createTask,
  updateTask
};