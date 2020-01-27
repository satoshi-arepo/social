const PORT = 3000;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(require("./auth"));

app.use("/", require("./controllers/static.js"));
app.use("/api/posts", require("./controllers/api/posts.js"));
app.use("/api/sessions", require("./controllers/api/sessions.js"));
app.use("/api/users", require("./controllers/api/users.js"));


app.listen(PORT, () => {
	console.log("Server listening on", PORT)
});
