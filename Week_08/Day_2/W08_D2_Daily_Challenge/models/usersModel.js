const { db } = require ('../config/db.js');
const bcrypt = require ('bcrypt');


module.exports = {
    createUser: async (new_user_data) => {
        const { email, username, first_name, last_name, password } = new_user_data;

        const trx = await db.transaction();

        try {
            const [user] = await trx('users').insert({email, username, first_name, last_name}, ['username', 'id']);

            hashPwd = await bcrypt.hash(password + "", 10);
            await db('hashpwd').insert({password: hashPwd, username}, ['id', 'password']);

            await trx.commit();

            return user;            
        } catch (error) {
            await trx.rollback();
            throw error;
        }
    },

    getUserByUsername: async (username) => {
        return db('users').select("id", "username", "email").where("username", username);
    }
}



// async function getVersion() {
//     try {
//         result = await db.raw("select version()")
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getVersion();