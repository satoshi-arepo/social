const router = require('express').Router();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const config = require('../../config');

router.get('/', (req, res, next) => {
	if (!req.headers['x-auth']) return res.send(401);
	const auth = jwt.decode(req.headers['x-auth'], config.secret);
	User.findOne({username: auth.username}, (e, user) => {
		if (e) return next(e);
		res.json(user);
	});
});

router.post('/', (req, res, next) => {
	console.log(req.body.username, req.body.password);
	bcrypt.hash(req.body.password, 10, (e, hash) => {
		if (e) return next(e);
		const user = new User({
			username: req.body.username,
			password: hash
		});
		user.save(e => {
			if (e) return next(e);
			res.sendStatus(201);
		});
	});
});

module.exports = router;
