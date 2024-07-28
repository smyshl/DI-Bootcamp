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
    },

    getPasswordByUsername: async (username) => {
        return db('hashpwd').select("password").where("username", username);
    },

    getAllUsers: async () => {
        return db('users');
    },

    getUserById: async (id) => {
        return db('users').select("id", "username", "email").where("id", id);
    },

    updateUser: async (id, username, new_user_data) => {
        const { email, first_name, password, last_name} = new_user_data;
        let new_password;
        let updated_user;

        const trx = await db.transaction();

        try {

            if (new_user_data.password) {
                new_password = new_user_data.password;
                delete new_user_data.password;
                hashPwd = await bcrypt.hash(new_password + "", 10);
                new_password = await trx('hashpwd').update({password: hashPwd}, ['id', 'password']).where("username", username);
            }

            if (Object.keys(new_user_data).length > 0) {
                updated_user = await trx('users').update(new_user_data, ['id', 'username', 'email', 'first_name', 'last_name']).where("id", id);
            }

            trx.commit();            
            return updated_user;
        } catch (error) {
            trx.rollback();
            throw error;
        }

    },

}
