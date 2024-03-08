const Task = require("../models/Task");

const createTaskService = async (taskData) => {
    try {

        const uploadedTask = await Task.create(taskData);
        return uploadedTask

    }catch (error) {
        throw error;
    }
}

const fetchAllTask = async (userId) => {
    try {
        const fetchTask = await Task.find({ userId })
        return fetchTask
    }catch (error) {
        throw error;
    }
}

const getTaskByIdService = async (userId, taskId) => {
    try {
        const fetchTaskById = await Task.findOne({ userId, _id: taskId })
        return fetchTaskById
    }catch (error) {
        throw error;
    }
    
}

const updateTaskService = async (userId, id, updatedData) =>{
    try {
        const updateTaskData = await Task.findOneAndUpdate(
            { userId, _id: id }, 
            {$set: updatedData}, 
            {new: true}
            );
        return updateTaskData;
    }catch (error) {
        throw error;
    }
}

const deleteTaskService =  async (userId, id) =>{
    try {
        const deletedData = await Task.findOneAndDelete({userId, _id: id});
        return deletedData;
    }catch (error) {
        throw error;
    }
}

module.exports = {
    createTaskService,
    fetchAllTask,
    getTaskByIdService,
    updateTaskService,
    deleteTaskService
}