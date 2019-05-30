const Sequelize = require("sequelize");
const db = require.main.require("./libraries/database").sequelize;

const tableName = "users";
const attributes = {
	email: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	}
};

const primaryKey = () => {
	return "id";
};
const hiddenAttributes = () => {
	return ["password", "created_at", "updated_at"];
};
const unprotectedAttributes = () => {
	return ["id", "created_at", "updated_at"]
		.concat(Object.keys(attributes))
		.filter(attr => {
			return !hiddenAttributes().includes(attr);
		});
};

const User = db.define(tableName, attributes, {
	createdAt: "created_at",
	updatedAt: "updated_at",
	deletedAt: false
});

module.exports = {
	ORM: User,
	primaryKey,
	hiddenAttributes,
	unprotectedAttributes
};
