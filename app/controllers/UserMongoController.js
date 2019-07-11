const CrudController = require("gemboot").CrudController;
const UserMongoRepository = require("@repositories/UserMongoRepository");
const validator = require("gemboot").validator;

class UserMongoController extends CrudController {
	constructor() {
		super(UserMongoRepository);
	}

	simpan(req, res) {
		validator.validate(req.body, {
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
		this.store(req, res);
	}
}

module.exports = UserMongoController;
