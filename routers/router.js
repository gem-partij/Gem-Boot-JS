module.exports = router => {
	const GBRouter = new (require("gemboot")).GBRouter(router);
	const requireAuth = require("@middleware/CheckAuthentication");

	// Just for debugging
	// You can remark the code if you want
	const debugRequest = require("debug")("app:request");
	router.use((req, res, next) => {
		debugRequest(
			"Request comming in: " + req.method + " " + req.originalUrl
		);
		next();
	});

	// Modular Route Example
	router.use("/auth", require("./modules/auth"));

	// CRUD Route Example
	GBRouter.crud("/api/user", requireAuth, "@controllers/UserController");

	// Normal Route Example
	GBRouter.get(
		"/api/hello",
		null,
		"@controllers/HelloController",
		"sayHello"
	);

	// CRUD Route Mongo Example
	// GBRouter.crud("/api/usermongo", null, "@controllers/UserMongoController");

	return router;
};
