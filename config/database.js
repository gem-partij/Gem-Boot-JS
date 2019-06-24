const env = require("gemboot").env;

module.exports = {
	/*
    |--------------------------------------------------------------------------
    | Default Database Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the database connections below you wish
    | to use as your default connection for all database work. Of course
    | you may use many connections at once using the Database library.
    |
    */

	default: env("DB_CONNECTION", "default"),

	/*
   |--------------------------------------------------------------------------
   | Database Connections
   |--------------------------------------------------------------------------
   |
   | Here are each of the database connections setup for your application.
   | Of course, examples of configuring each database platform that is
   | supported by Gemboot is shown below to make development simple.
   |
   */

	connections: {
		default: {
			driver: env("DB_DRIVER", "mysql"),
			url: env("DB_URL"),
			host: env("DB_HOST", "127.0.0.1"),
			port: env("DB_PORT", "3306"),
			database: env("DB_NAME", "gem_boot_js"),
			username: env("DB_USER", "root"),
			password: env("DB_PASS", ""),
			unix_socket: env("DB_SOCK", ""),
			charset: "utf8mb4",
			collation: "utf8mb4_unicode_ci",
			prefix: "",
			prefix_indexes: true,
			strict: true,
			engine: null
		},
		mysql: {
			driver: "mysql",
			url: "http://localhost",
			host: "127.0.0.1",
			port: "3306",
			database: "gem_boot_js",
			username: "angger",
			password: "",
			unix_socket: "",
			charset: "utf8mb4",
			collation: "utf8mb4_unicode_ci",
			prefix: "",
			prefix_indexes: true,
			strict: true,
			engine: null
		},
		mongodb: {
			driver: "mongodb",
			url: "http://localhost",
			host: "127.0.0.1",
			port: "27017",
			database: "gem_boot_js",
			username: "",
			password: "",
			strict: true
		}
	}
};
