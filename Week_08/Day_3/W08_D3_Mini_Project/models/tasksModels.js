const fs = require ('fs');
const db = require ('../config/db.js');

function get_new_id () {
    try {
        read_id = fs.readFileSync('./config/lastId.txt', 'utf-8');
        fs.writeFileSync('./config/lastId.txt', `${Number(read_id) + 1}`, 'utf-8'); 
        return Number(read_id) + 1;   
    } catch (error) {
        if (error.code === "ENOENT") {
            try {
                fs.writeFileSync('./config/lastId.txt', "1", 'utf-8'); 
                return 1;
            } catch (error) {
                throw error;
            };
        }
        console.log(error);
    }
}


module.exports = {
    createTask: (task_json) => {
        const id = get_new_id();
        const db_data = db.dbRead();
        const new_task = {...task_json, id}
        db_data.push(new_task)
        db.dbWrite(db_data);
        return new_task;
    },

    getAllTasks: () => {
        return db.dbRead();
    },

    getTaskById: (id) => {
        const db_data = db.dbRead();
        index = db_data.findIndex((element) => element.id == id);
        return [index, db_data[index]];
    },

    updateTask: (index, task_json) => {
        const db_data = db.dbRead();
        db_data[index] = task_json
        db.dbWrite(db_data);
        return db_data[index];


    }


}