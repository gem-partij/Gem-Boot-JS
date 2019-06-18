const CrudController = require("gemboot").CrudController;
const UserRepository = require("@repositories/UserRepository");

class UserController extends CrudController {
	constructor() {
		super(UserRepository);
	}
}

module.exports = UserController;
