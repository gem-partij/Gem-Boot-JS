const debugRequest = require("debug")("app:request");

const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
	debugRequest("Request comming in: " + req.method + " " + req.originalUrl);
	next();
});

router.use("/auth", require("./modules/auth"));
// router.use("/api/user", require("./modules/user"));

const GBRouter = new (require("@utils/GBRouter"))(router);

GBRouter.crud("/api/user", "@controllers/UserController");

module.exports = router;
