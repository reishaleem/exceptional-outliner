const router = require("express").Router();
const userService = require("../services/UserService");
let User = require("../models/UserSchema");

// This is just for testing
router.route("/").get((req, res) => {
    console.log();
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/create").post((req, res) => {
    userService.createUser(req.body, res);
});

router.route("/:id/update").put((req, res) => {
    userService.updateUser(req.params.id, req.body, res);
});

router.route("/:id/delete").delete((req, res) => {
    userService.deleteUser(req.params.id, res);
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
