const PORT = 3000;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/api/posts", (rq, rs) => rs.json([
		{
			username: "johndoe",
			body: "node rocks!"
		}
	])
);

app.post("/api/posts", (rq, rs) => {
	console.log("Post received!");
	console.log(rq.body.username);
	console.log(rq.body.body);
	rs.status(201);
});

app.listen(PORT, function () {
	console.log("Server listening on", PORT)
});
