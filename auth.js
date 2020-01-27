const {decode} = require("jwt-simple");
const {secret} = require("./config");

module.exports = (req, res, next) => {
	if (req.headers['x-auth']) {
		req.auth = decode(req.headers['x-auth'], secret);
	}
	next();
}
