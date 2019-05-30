const authService = require.main.require("./services/AuthService");
const jwt = require("jsonwebtoken");

const register = (req, res) => {
	if (req.body.email && req.body.password) {
		authService
			.register(req.body.email, req.body.password)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.error(err);
				return res.status(400).send(err.message);
			});
	} else {
		console.error(req.body);
		return res.status(400).send("Invalid Syntax");
	}
};

const login = (req, res) => {
	if (req.body.email && req.body.password) {
		const email = req.body.email;
		const password = req.body.password;

		authService
			.login(email, password)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.error(err);
				return res.status(400).send(err.message);
			});
	} else {
		console.error(req.body);
		return res.status(400).send("Invalid Syntax");
	}
};

const verify = (req, res) => {
	if (!req.headers["authorization"]) {
		res.status(400).send("Invalid Request");
	} else {
		jwt.verify(
			req.headers["authorization"],
			process.env.JWT_SECRET,
			(err, decoded) => {
				if (err) {
					res.status(400).send("Invalid Token");
				} else {
					res.status(200).send("Valid Token");
				}
			}
		);
	}
};

module.exports = {
	register,
	login,
	verify
};
