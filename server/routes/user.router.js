//import userService from "../services/user.service";

const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error " + err));
})

router.route("/create").post((req, res) => {
    console.log(req);
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const bio = req.body.bio;

    const password = "123456";

    const newUser = User({
        name,
        username,
        email,
        password,
        bio,
    });

    newUser
        .save()
        .then(() => res.json(`User with username "${username}" added!`))
        .catch((err) => res.status(400).json("Error " + err));
})

module.exports = router;
