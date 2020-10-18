const router = require("express").Router();
const service = require("../services/universe.service");

router.route("/:id/create").post((req, res) => {
    service.createUniverse(req.params.id, req.body, res);
});

module.exports = router;