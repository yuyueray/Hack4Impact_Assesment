var mongoose = require("mongoose");

var ApplicantSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    grade: String,
    major: String,
    skills: String,
    reason: String
});

module.exports = mongoose.model("Applicant", ApplicantSchema);