const CrudController = require("gemboot").CrudController;
const UserRepository = require("@repositories/UserRepository");

class UserController extends CrudController {
	constructor() {
		super();
		this.repo = new UserRepository();
	}
}

module.exports = UserController;
