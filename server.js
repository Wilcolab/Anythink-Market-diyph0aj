const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "Missing task field" });
  }

  tasks.push(task);
  res.json({ message: "Task added" });
});

app.listen(port, () => {
  console.log(`Node server running on port ${port}`);
});
