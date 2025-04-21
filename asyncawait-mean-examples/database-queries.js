const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema({ name: String }));

async function getUsers() {
  try {
    const users = await User.find();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

getUsers();


