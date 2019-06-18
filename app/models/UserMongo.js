const Model = require("gemboot").Model;

class UserMongo extends Model {
	constructor() {
		super();

		this.table = "User";
		this.attributes = {
			email: String,
			password: String
		};
	}
}

module.exports = UserMongo;
