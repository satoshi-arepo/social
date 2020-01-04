const mongoose = require("mongoose");
const db = "mongodb://localhost/social";

mongoose.connect(db, () => console.log("Connected to database"));
module.exports = mongoose;
