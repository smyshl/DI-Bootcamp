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
    createTask: async (task_json) => {
        const id = get_new_id();
        const db_data = db.dbRead();

        const new_task = {...task_json, id}

        db_data.push(new_task)

        console.log(db_data);
        db.dbWrite(db_data);

    }

}