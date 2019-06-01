const debugRequest = require("debug")("app:request");

const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
	debugRequest("Request comming in: " + req.method + " " + req.originalUrl);
	next();
});

router.use("/auth", require("./modules/auth"));

const GBRouter = new (require("gemboot")).GBRouter(router);
const auth = require("@middleware/CheckAuthentication");

GBRouter.crud("/api/user", auth, "@controllers/UserController");

module.exports = router;
