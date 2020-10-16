const router = require("express").Router();
const service = require("../services/auth.service");

router.route("/login").post((req, res) => {
    service.login(req.body, res);
});

module.exports = router;