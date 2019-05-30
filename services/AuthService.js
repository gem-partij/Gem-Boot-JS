const UserRepository = require.main.require("./repositories/UserRepository");
const jwt = require.main.require("./libraries/jwt");
const bcrypt = require("bcryptjs");

const userRepo = new UserRepository();

const register = async (email, password) => {
	const user = await userRepo.getByEmail(email);

	return new Promise((resolve, reject) => {
		if (user) reject(new Error("Email already exists!"));

		userRepo
			.create({
				email: email,
				password: password
			})
			.then(resp => {
				if (resp) {
					const token = jwt.createToken(resp.id);

					resolve({
						auth: true,
						token: token,
						user: { id: resp.id, email: resp.email }
					});
				} else {
					reject(new Error("Fail Creating New User."));
				}
			})
			.catch(err => {
				reject(err);
			});
	});
};

const login = (email, password) => {
	return new Promise((resolve, reject) => {
		userRepo
			.getByEmail(email, true)
			.then(result => {
				if (!result) reject(new Error("User not found"));

				const user = result;

				const passwordIsValid = bcrypt.compareSync(
					password,
					user.password
				);
				if (!passwordIsValid) reject(new Error("Invalid Password!"));

				const token = jwt.createToken(user.id);

				resolve({ auth: true, token: token });
			})
			.catch(err => {
				reject(err);
			});
	});
};

module.exports = {
	register,
	login
};
