const router = require("express").Router();
const service = require("../services/auth.service");

router.route("/refresh").post((req, res) => {
    return service.refreshToken(req.body, res);
})

router.route("/login").post((req, res) => {
    service.login(req.body, res);
});

module.exports = router;