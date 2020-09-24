let User = require("../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function login(request, response) {
    const username = request.username;

    const users = await User.find({ username: username }).exec();
    if (users == null) {
        response.status(400).json("Error: Username or password is incorrect");
        return;
    }
    const user = users[0];

    if (await bcrypt.compare(request.password, user.password)) {
        const userDetails = {
            name: user.name,
            username: user.username,
        };
        const accessToken = jwt.sign(userDetails, process.env.JWT_SECRET);
        response.json({ accessToken: accessToken }); // will eventually be jwt related stuff
    } else {
        response.json("Error: Username or password is incorrect");
    }
}

module.exports = { login };
