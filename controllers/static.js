const express = require("express");
const router = express.Router();

router.get("/", (rq, rs) => {
	rs.sendFile(process.cwd() + "/layouts/app.html");
});
router.use(express.static(process.cwd()  + "/assets"));
router.use(express.static(process.cwd()  + "/templates"));

module.exports = router;
