var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Applicant = require("./models/applicant");
var indexRoutes = require("./routes/index");
//Dependencies: express mongoose body-parser ejs

mongoose.connect("mongodb://localhost:27017/H4IAsses", {useNewUrlParser : true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use("/", indexRoutes);
app.use(express.static(__dirname + "/public"));

app.listen(3000, process.env.IP, function () {
    console.log("Site Started.");
});