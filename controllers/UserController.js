const CrudController = require("@gemboot/CrudController");
const UserRepository = require("@repository/UserRepository");

class UserController extends CrudController {
	constructor() {
		super();
		this.repo = new UserRepository();
	}
}

module.exports = UserController;
