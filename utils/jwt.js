const jwt = require("jsonwebtoken");

const createToken = (userid, expiresIn = 86400) => {
	return jwt.sign({ id: userid }, process.env.JWT_SECRET, {
		expiresIn: expiresIn
	});
};

module.exports = {
	createToken
};
