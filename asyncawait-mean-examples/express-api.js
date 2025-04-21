const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/tasks", { useNewUrlParser: true, useUnifiedTopology: true });

const Task = mongoose.model("Task", new mongoose.Schema({ title: String, completed: Boolean }));

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));