const express = require("express");
const router = express.Router();

const {
  addTask,
  editTask,
  getTask,
  deleteTask,
  getTasks,
} = require("../controllers/tasks");

router.get("/", getTasks);

router.post("/", addTask);

router.get("/:id", getTask);

router.patch("/:id", editTask);

router.delete("/:id", deleteTask);

module.exports = router;
