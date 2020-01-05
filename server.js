const PORT = 3000;

const express = require("express");
const bodyParser = require("body-parser");
const Post = require("./models/post");

const app = express();
app.use(bodyParser.json());

app.get("/", (rq, rs) => rs.sendFile(__dirname + "/posts.html"));

app.get("/api/posts", (rq, rs, next) => {
	Post.find((e, posts) => {
		if (e) return next(e);
		rs.json(posts);
	});
});

app.post("/api/posts", (rq, rs, next) => {
	const post = new Post({
		username: rq.body.username,
		body: rq.body.body
	});
	post.save((e, post) => {
		if (e) return next(e);
		rs.status(201);
		rs.json(post);
	});
});

app.listen(PORT, function () {
	console.log("Server listening on", PORT)
});
