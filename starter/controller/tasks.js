const Task = require("../Model/task");

// get All task
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get one task
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
  //   res.json({ id: req.params.id });
};

// update one
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID },req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({ task});
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// delete one
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(202).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

// app.get('/api/v1/tasks') . - get all the task
// app.post('/api/v1/tasks') . - get all the task
// app.get('/api/v1/tasks/:id') . - get all the task
// app.patch('/api/v1/tasks/:id') . - get all the task
// app.delete('/api/v1/tasks/:id') . - get all the task
