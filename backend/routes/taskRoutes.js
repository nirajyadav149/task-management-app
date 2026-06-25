const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get all tasks" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create task" });
});

router.put("/:id", (req, res) => {
  res.json({ message: "Update task" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete task" });
});

module.exports = router;
