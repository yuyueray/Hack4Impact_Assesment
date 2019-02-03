var express = require("express");
var router = express.Router();
var Applicant = require("../models/applicant");

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/register", function (req, res) {
    res.render("register");
});
//Signing Up...
router.post("/register", function (req, res) {
    Applicant.create(req.body.applicant, function (err, newApp) {
        if (err) {
            console.log(err);
        } else {
            // alert("Success");
            res.redirect("/");
        }
    });
});

router.get("/show", function (req, res) {

    Applicant.find({}, function (err, allApplication) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", {apps: allApplication})
        }
    });
});

module.exports = router;