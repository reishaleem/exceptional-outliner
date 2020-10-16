const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let Users = require("../models/user.model")

async function login(request, response) {
    const username = request.username;

    const users = await Users.find({ username: username }).exec();
    if (users == null) {
        response.status(400).json("Error: Username or password is incorrect");
        return;
    }
    const user = users[0];

    if (await bcrypt.compare(request.password, user.password)) {
        const userDetails = {
            id: user._id,
            name: user.name,
            username: user.username,
        };
        const accessToken = jwt.sign(userDetails, process.env.JWT_SECRET);
        response.json({ accessToken: accessToken });
    } else {
        response.json("Error: Username or password is incorrect");
    }
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // get the token part after BEARER
    if (token == null) res.status(401).json("Invalid token");

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) res.status(403).json("Token error...");

        req.user = user;
        next();
    });
}

async function encryptPassword(password) {
    return await bcrypt.hash(password, 10);
}

module.exports = {
    login,
    authenticateToken,
    encryptPassword
}