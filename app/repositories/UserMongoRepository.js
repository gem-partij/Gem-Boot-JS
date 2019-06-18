const CrudRepository = require("gemboot").CrudRepository;
const UserMongo = require("@models/UserMongo");

class UserMongoRepository extends CrudRepository {
	constructor() {
		super(UserMongo);
	}
}

module.exports = UserMongoRepository;
