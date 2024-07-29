const tasksModels = require ('../models/tasksModels.js');


module.exports = {
    createTask: async (req, res) => {
        try {
            let new_task = tasksModels.createTask(req.body);
            res.json({"message": "created", "new task:": new_task});
        } catch (error) {
            res.json({"message": error.message});
        }
    },

    getAllTasks: async (req, res) => {
        try {
            let all_tasks = tasksModels.getAllTasks();
            res.json(all_tasks);
        } catch (error) {
            res.json({"message": error.message});
        }
    },

    getTaskById: async (req, res) => {
        try {
            const {id} = Number(req.params);
            task = tasksModels.getTaskById(id);
            if (task[1]) {
                res.json(task[1]);
            } else {
                throw new Error ("No task found")
            }
        } catch (error) {
            res.json({"message": error.message});
        }
    },

    updateTask: async (req, res) => {
        try {
            const {id} = Number(req.params);
            updated_data = {...req.body, id};
            old_task = tasksModels.getTaskById(id);
            if (old_task[1]) {
                console.log(updated_data);
                res.json(tasksModels.updateTask(old_task[0], updated_data));
            } else {
                throw new Error ("No task found")
            }
        } catch (error) {
            res.json({"message": error.message});
        }
    }
}
