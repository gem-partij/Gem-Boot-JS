const CrudController = require.main.require("./core/CrudController");
const UserRepository = require.main.require("./repositories/UserRepository");

class UserController extends CrudController {
	constructor() {
		super();
		this.repo = new UserRepository();
	}
}

module.exports = UserController;
