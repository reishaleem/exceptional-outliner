const router = require("express").Router();
const universeService = require("../services/UniverseService");
let User = require("../models/UserSchema");

router.route("/").get((req, res) => {
    User.find()
        .then((users) => {
            universes = users.map((user) => user.universes);
            res.json(universes);
        })
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id/create").post((req, res) => {
    universeService.createUniverse(req.params.id, req.body, res);
});

module.exports = router;
