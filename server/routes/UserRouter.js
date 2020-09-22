const router = require("express").Router();
let user = require("../models/User");

router.route("/").get((req, res) => {
    user.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error " + err));
    //user.findById("5f63bf0bfa25ebaf3b4ee248").then((user) => res.send(user));
    //res.send({ message: "Mongo issues..." });
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const bio = req.body.bio;

    const newUser = user({
        username,
        email,
        name,
        bio,
    });

    newUser
        .save()
        .then(() => res.json("User added"))
        .catch((err) => res.status(400).json("Error " + err));
});

// just a get request for now
router.route("/login").get((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    user.findOne({ username: username })
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
