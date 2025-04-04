const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  getTaskById,
  deleteTask,
  createTask
} = require('../controllers/task.controller');

router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTask);
router.post('/', createTask);

module.exports = router;