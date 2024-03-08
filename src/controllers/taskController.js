const taskService = require("../services/taskService");

const createTask = async (req, res) => {
    try {
        const {title, description, priority, isCompleted} = req.body
        const userId = req.user.id
        const taskData = await taskService.createTaskService({title, description, priority, isCompleted, userId});
        res.status(201).json(taskData);
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const fetchTask = async (req,res) => {

    try {
        const userId = req.user.id;
        const fetchAllTask = await taskService.fetchAllTask(userId);
        res.status(200).json(fetchAllTask);
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const getTaskById = async(req,res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const task = await taskService.getTaskByIdService(userId, id);

        if(!task) {
            return res.status(404).json({message : "Task  not found"});
        }

        res.status(200).json(task);
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const UpdatedData = req.body;
        const task = await taskService.updateTaskService(userId, id, UpdatedData);

        if(!task) {
            return res.status(404).json({message : "Task  not found"});
        }

        res.status(200).json(task);
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const deleteTask = await taskService.deleteTaskService(userId, id);

        if(!deleteTask) {
            return res.status(404).json({message : "Task  not found"});
        }
        res.status(204)
    }catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    createTask,
    fetchTask,
    getTaskById,
    updateTask,
    deleteTaskById
}