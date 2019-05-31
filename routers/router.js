const debugRequest = require("debug")("app:request");

const express = require("express");
const router = express.Router();

const RouterLib = require.main.require("./libraries/RouterLib");
const GBRoute = new RouterLib(router);

router.use((req, res, next) => {
	debugRequest("Request comming in: " + req.method + " " + req.originalUrl);
	next();
});

router.use("/auth", require("./modules/auth"));
// router.use("/api/user", require("./modules/user"));

GBRoute.crud("/api/user", "./controllers/UserController");

module.exports = router;
