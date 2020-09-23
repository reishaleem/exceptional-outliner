const router = require("express").Router();
const universeService = require("../services/UniverseService");
let User = require("../models/UserSchema");
const { route } = require("./UserRouter");

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

router.route("/:id/get/:universeId").get((req, res) => {
    universeService.getUniverse(req.params.id, req.params.universeId, res);
});

router.route("/:id/update/:universeId").put((req, res) => {
    universeService.updateUniverse(
        req.params.id,
        req.params.universeId,
        req.body,
        res
    );
});

router.route("/:id/delete/:universeId").delete((req, res) => {
    universeService.deleteUniverse(req.params.id, req.params.universeId, res);
});

module.exports = router;
