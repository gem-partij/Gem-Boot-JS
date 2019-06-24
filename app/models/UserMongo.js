const Model = require("gemboot").Model;

class UserMongo extends Model {
	constructor() {
		// connectionName, tableName, attributes
		super("mongodb", "User", {
			email: String,
			password: String
		});
	}
}

module.exports = UserMongo;
