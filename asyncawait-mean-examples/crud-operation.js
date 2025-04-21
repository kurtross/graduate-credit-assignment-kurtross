const mongoose = require("mongoose");

const Task = mongoose.model("Task", new mongoose.Schema({ title: String, completed: Boolean }));

async function createTask() {
  try {
    const task = new Task({ title: "Learn async/await", completed: false });
    const savedTask = await task.save(); // Await the save operation
    console.log("Task Created:", savedTask);
  } catch (error) {
    console.error("Error creating task:", error);
  }
}

createTask();