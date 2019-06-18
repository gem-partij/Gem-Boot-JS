const CrudController = require("gemboot").CrudController;
const UserMongoRepository = require("@repositories/UserMongoRepository");

class UserMongoController extends CrudController {
	constructor() {
		super(UserMongoRepository);
	}
}

module.exports = UserMongoController;
