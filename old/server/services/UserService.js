let User = require("../models/UserSchema");
const bcrypt = require("bcrypt");

async function createUser(request, response) {
    const username = request.username;
    const email = request.email;
    const name = request.name;
    const bio = request.bio;

    const password = await bcrypt.hash(request.password, 10);

    const newUser = User({
        username,
        password,
        email,
        name,
        bio,
    });

    newUser
        .save()
        .then(() => response.json(`User with username "${username}" added!`))
        .catch((err) => response.status(400).json("Error " + err));
}

function updateUser(userId, request, response) {
    const username = request.username;
    const email = request.email;
    const name = request.name;
    const bio = request.bio;

    User.findByIdAndUpdate(userId, {
        username: username,
        email: email,
        name: name,
        bio: bio,
    })
        .then(() => response.json(`Updated user with username "${username}" !`))
        .catch((err) => response.status(400).json("Error: " + err));
}

function deleteUser(userId, response) {
    User.findByIdAndDelete(userId)
        .then((user) =>
            response.json(`User with username "${user.username}" deleted!`)
        )
        .catch((err) => response.status(400).json("Error: " + err));
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
};
