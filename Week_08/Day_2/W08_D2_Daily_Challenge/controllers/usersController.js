const usersModel = require ('../models/usersModel.js');
const bcrypt = require ('bcrypt');


module.exports = {
    createUser: async (req, res) => {
        try {

            if (!req.body.username || !req.body.password) {
                throw new Error ("Username and password are required for registration")
            }

            users = await usersModel.getUserByUsername(req.body.username)
            if (users.length === 0) {
                user = await usersModel.createUser(req.body);
                res.json({"message": "User was successfully created", "user": user});
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
    },

    login: async (req, res) => {
        try {

            if (!req.body.username || !req.body.password) {
                throw new Error ("Username and password are required for login")
            }

            user = await usersModel.getUserByUsername(req.body.username)
            if (user.length != 0) {
                [password] = await usersModel.getPasswordByUsername(req.body.username);
                passwordMatch = await bcrypt.compare(req.body.password, password.password);

                if(passwordMatch) {
                    res.json({"message": "Successful login", user: {"id": user[0].id, "username": user[0].username}})
                } else {
                    res.json({"message": "Wrong password"})
                };
            } else {
                throw new Error (`User not found`)
            };
        } catch (error) {
            res.json({"message": error.message})
        }
    },

    getAllUsers: async (req, res) => {
        try {
            users = await usersModel.getAllUsers();
            if (users.length != 0) {
                res.json(users);   
            }else {
                res.json({"message": "No users found"})
            }

        } catch (error) {
            res.json({"message": error.message})
        }
    },

    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            user = await usersModel.getUserById(id);
            if (user.length > 0){
                res.json(user);
                return user;
            } else {
                throw new Error ('User not found')
            };
        } catch (error) {
            res.status(404).json({"message": error.message});
        }
    },

    updateUser: async (req, res) => {
        const { id } = req.params;
        const new_user_data = req.body;

        let message = "";
        try {
            user = await usersModel.getUserById(id);
            console.log(user);

            if (user.length === 0) {
                return res.json({"message": `User not found`});
            }

            if (new_user_data.password) {
                message += "Password was successfully changed. "
            }

            if (new_user_data.username) {
                delete new_user_data.username;
                message += "It's impossible to change username. "
                if (Object.keys(new_user_data).length === 0) {
                    res.json({"message": message + "Nothing wasn't updated"});
                }
            }

            [updated_user] = await usersModel.updateUser(id, user[0].username, new_user_data);

            res.json({"message": message, "updated information (except password)": updated_user});

        } catch (error) {
            res.json({"message": error.message});
        }
    },

}