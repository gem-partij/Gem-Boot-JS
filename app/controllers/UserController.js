const CrudController = require("gemboot").CrudController;
const UserRepository = require("@repositories/UserRepository");
const validator = require("gemboot").validator;
const logger = require("gemboot").logger();

class UserController extends CrudController {
	constructor() {
		super(UserRepository);
	}

	simpan(req, res) {
		const validatedData = validator.validate(req.body, {
			email: {
				type: String,
				required: true
			},
			password: {
				type: String,
				minlength: 6,
				required: true
			}
		});

		this.UserRepository.insert(validatedData)
			.then(response => {
				res.send(JSON.stringify(response));
			})
			.catch(err => {
				logger.error(err);
				logger.error(err.stack);
				res.status(500).send(err.message);
			});
	}
}

module.exports = UserController;
