const express = require("express");
const authenticateToken = require("../middleware/authenticateToken");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/", authenticateToken, taskController.createTask);
router.get("/", authenticateToken, taskController.fetchTask);
router.get("/:id", authenticateToken, taskController.getTaskById);
router.put("/:id", authenticateToken, taskController.updateTask);
router.delete("/:id", authenticateToken, taskController.deleteTaskById);


module.exports = router;