const Sequelize = require("sequelize");
const Model = require("gemboot").Model;

class User extends Model {
	constructor() {
		// connectionName, tableName, attributes
		super("mysql", "users", {
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			}
		});

		this.protectedAttributes = ["password", "created_at", "updated_at"];
		this.unprotectedAttributes = this.generateUnprotectedAttributes();
	}
}

module.exports = User;
