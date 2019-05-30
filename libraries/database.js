const debug = require("debug")("app:db");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		host: process.env.DB_HOST,
		dialect: process.env.DB_TYPE
	}
);

sequelize
	.authenticate()
	.then(() => {
		debug("Connection to database has been established successfully.");
	})
	.catch(err => {
		console.error("Unable to connect to the database:", err);
	});

module.exports = {
	knex: require("knex")(require.main.require("./knexfile")),
	sequelize
};
