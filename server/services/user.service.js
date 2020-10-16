const authService = require("./auth.service")
let Users = require("../models/user.model")

async function createUser(request, response) {
    const username = request.username;
    const email = request.email;
    const name = request.name;
    const bio = ""; // users do not edit their bios when creating, so it starts empty

    const password = await authService.encryptPassword(request.password);

    const newUser = Users({
        name,
        username,
        email,
        password,
        bio
    });

    newUser
        .save()
        .then(() => response.json(`User with username "${username}" added!`))
        .catch((err) => {
            response.status(400).json(err);
        });
}

async function getUserByUsername(username) {
    return await User.find({ username: username }).exec();
}


module.exports = {
    createUser,
    getUserByUsername
}