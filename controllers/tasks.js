const Task = require("../db/model");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ data: tasks, success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, try again", success: false });
  }
};

const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ created: task, success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, try again", success: false });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({
        message: `Task with the id ${req.params.id} was not found.`,
        success: false,
      });
    }
    res.status(200).json({ data: task, success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, try again", success: false });
  }
};

const editTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({
        message: `Task was not found with the id of ${req.params.id}`,
        success: false,
      });
    }
    res.status(200).json({ data: task, success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, try again", success: false });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({
        message: `Task was not found with the id of ${req.params.id}`,
        success: false,
      });
    }
    res.status(200).json({ data: task, success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong, try again", success: false });
  }
};

module.exports = { getTasks, addTask, editTask, deleteTask, getTask };
