const router = require('express').Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const config = require('../../config');

router.post('/', function (req, res, next) {
	User.findOne({username: req.body.username})
		.select('password')
		.select('username')
		.exec((e, user) => {
			if (e) return next(e);
			if (!user) return res.sendStatus(401);
			bcrypt.compare(req.body.password, user.password, (e, valid) => {
				if (e) return next(e);
				if (!valid) return res.sendStatus(401);
				const token = jwt.encode({username: user.username}, config.secret);
				res.send(token);
			});
		});
});

module.exports = router;
