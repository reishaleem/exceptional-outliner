const router = require("express").Router();
let user = require("../models/User");

router.route("/").get((req, res) => {
    user.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(200).json("Error test " + err));
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

module.exports = router;
