const express = require("express");
const app = express();

app.get("/", (rq, rs) => {
	rs.status(200);
	rs.send("Hello World");
});

app.listen(3000);
