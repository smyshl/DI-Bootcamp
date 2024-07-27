const usersModel = require ('../models/usersModel.js');


module.exports = {
    createUser: async (req, res) => {
        try {
            users = await usersModel.getUserByUsername(req.body.username)
            if (users.length === 0) {
                user = await usersModel.createUser(req.body);
                res.json(user);
            } else {
                throw new Error (`User with username '${req.body.username}' already exists`)
            };
        } catch (error) {
            res.json({"message": error.message});
        }
    },

    getUserByUsername: async (req, res) => {
        const { username } = req.params;
        try {
            user = await usersModel.getUserByUsername(username);
            if (user.length > 0){
                res.json(user);
                return user;
            } else {
                throw new Error ('User not found')
            };
        } catch (error) {
            res.status(404).json({"message": error.message});
        }
    }

}