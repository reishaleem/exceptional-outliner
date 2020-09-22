const router = require("express").Router();
const userService = require("../services/UserService");
let User = require("../models/UserSchema");

router.route("/").get((req, res) => {
    User.find()
        .then((users) => {
            universes = users.map((user) => user.universes);
            res.json(universes);
        })
        .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
