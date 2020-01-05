const router = require("express").Router()

router.get("/", (rq, rs) => {
	rs.sendFile(process.cwd() + "/layouts/posts.html");
});

module.exports = router;
