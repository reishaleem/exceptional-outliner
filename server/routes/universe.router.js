const router = require("express").Router();
const service = require("../services/universe.service");
const authService = require("../services/auth.service");

//router.use(authService.authenticateToken); // this is going to add the 'user' part to every request, so that way, we can authenticate and get username and ID

router.route("/").get((req, res) => {
    service.getUniverses(req, res);
})

router.route("/:id/create").post((req, res) => {
    service.createUniverse(req.params.id, req.body, res);
});

module.exports = router;