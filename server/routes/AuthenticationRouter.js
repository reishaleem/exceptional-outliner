const router = require("express").Router();
const authenticationService = require("../services/AuthenticationService");
let User = require("../models/UserSchema");

router.route("/login").post((req, res) => {
    authenticationService.login(req.body, res);
});

module.exports = router;
