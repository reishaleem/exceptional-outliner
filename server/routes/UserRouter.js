const router = require("express").Router();
let User = require("../models/UserSchema");

router.route("/").get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const bio = req.body.bio;

    const newUser = User({
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

router.route("/:id/update").put((req, res) => {
    const userId = req.params.id;
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const bio = req.body.bio;

    User.findByIdAndUpdate(userId, {
        username: username,
        email: email,
        name: name,
        bio: bio,
    })
        .then(() => res.json(`Updated user with username "${username}" !`))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/delete").delete((req, res) => {
    const userId = req.params.id;

    User.findByIdAndDelete(userId)
        .then((user) =>
            res.json(`User with username "${user.username}" deleted!`)
        )
        .catch((err) => res.status(400).json("Error: " + err));
});

// just a get request for now
router.route("/login").get((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username })
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
