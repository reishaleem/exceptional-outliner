const router = require("express").Router();
const service = require("../services/user.service")
let User = require("../models/user.model"); // only here while we are still testing. Used for the root route

router.route("/").get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error " + err));
})

router.route("/create").post((req, res) => {
    service.createUser(req.body, res);
})

router.route("/checkUsernameExists/:username").get((req, res) => {
    service.checkUsernameExists(req.params.username, res);
})


module.exports = router;
