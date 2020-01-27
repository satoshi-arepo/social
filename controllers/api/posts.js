const express = require("express");
const router = express.Router()
const Post = require("../../models/post");

router.get("/", (rq, rs, next) => {
	Post.find()
	    .sort("-date")
	    .exec((e, posts) => {
      	if (e) return next(e);
      	rs.json(posts);
	    });
});

router.post("/", (rq, rs, next) => {
	const post = new Post({
		username: rq.auth.username,
		body: rq.body.body
	});
	post.save((e, post) => {
		if (e) return next(e);
		rs.status(201);
		rs.json(post);
	});
});

module.exports = router;
