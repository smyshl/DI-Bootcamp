const fs = require ('fs');


module.exports = {
    dbRead: () => {
        try {
            const data = fs.readFileSync('./config/db.json', 'utf-8');
            return JSON.parse(data); 
        } catch (error) {
            console.log("Can't read from file", error);
        }
    },

    dbWrite: (json_data) => {
        try {
            fs.writeFileSync('./config/db.json', JSON.stringify(json_data), 'utf-8')   
            return ("Data was successfully written to file")         
        } catch (error) {
            console.log("Can't write to file", error);
        }

    }
};

