const authService = require("./auth.service")
let Users = require("../models/user.model")

async function createUser(request, response) {
    const email = request.email;
    const name = request.name;
    const penName = email; // users do not edit their pen names when creating, so it starts as the email
    const bio = ""; // users do not edit their bios when creating, so it starts empty
    const universes = []

    const password = await authService.encryptPassword(request.password);

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
        .then(() => response.json(`User with username "${username}" added!`))
        .catch((err) => {
            response.status(400).json(err);
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
}