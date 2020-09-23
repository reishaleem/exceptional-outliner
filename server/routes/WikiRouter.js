const router = require("express").Router();
const wikiService = require("../services/wikiService");
let User = require("../models/UserSchema");

router.route("/").get((req, res) => {
    User.find()
        .then((users) => {
            universes = users.map((user) => user.universes);
            wikis = universes.map((universe) =>
                universe.map((uni) => uni.wikis)
            );
            res.json(wikis);
        })
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id/:universeId/create").post((req, res) => {
    wikiService.createWiki(req.params.id, req.params.universeId, req.body, res);
});

router.route("/:id/:universeId/get/:wikiId").get((req, res) => {
    wikiService.getWiki(
        req.params.id,
        req.params.universeId,
        req.params.wikiId,
        res
    );
});

router.route("/:id/:universeId/update/:wikiId").put((req, res) => {
    wikiService.updateWiki(
        req.params.id,
        req.params.universeId,
        req.params.wikiId,
        req.body,
        res
    );
});

router.route("/:id/:universeId/delete/:wikiId").delete((req, res) => {
    wikiService.deleteWiki(
        req.params.id,
        req.params.universeId,
        req.params.wikiId,
        res
    );
});

module.exports = router;
