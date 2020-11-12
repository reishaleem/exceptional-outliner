const authService = require("./auth.service")
let Users = require("../models/user.model")

async function getAllUsers() {
    try {
        const users = await Users.find();
        return users;
    } catch (error) {
        throw error;
    }
}

async function createUser(request, response) {
    const email = request.email;
    const name = request.name;
    const penName = email; // users do not edit their pen names when creating, so it starts as the email
    const bio = ""; // users do not edit their bios when creating, so it starts empty
    const universes = []

    let password = null
    try {
        password = await authService.encryptPassword(request.password);
    } catch (error) {
        console.log(error)
        response.status(500).json(error)
        return;
    }

    const newUser = Users({
        name,
        email,
        password,
        penName,
        bio,
        universes
    });

    newUser
        .save()
        .then(() => response.json(`User with email "${email}" added!`))
        .catch((error) => {
            response.status(400).json(error);
        });
}

async function checkUsernameExists(username, response) {
    console.log(username)
    
    const exists = await Users.exists({username: username});
   
    response.json({
        taken: exists
    })
}

module.exports = {
    createUser,
    checkUsernameExists,
    getAllUsers,
}