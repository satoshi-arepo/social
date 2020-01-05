const express = require("express");
const router = express.Router();

router.get("/", (rq, rs) => {
	rs.sendFile(process.cwd() + "/layouts/posts.html");
});
router.use(express.static(process.cwd()  + "/assets"));

module.exports = router;
