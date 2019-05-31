require("module-alias/register");
require("dotenv").config();
const startupDebug = require("debug")("app:startup");

const express = require("express");

const app = express();

if (process.env.APP_ENV == "local") {
	const morgan = require("morgan");
	app.use(morgan("tiny"));
	startupDebug("Morgan Enabled.");
} else {
	startupDebug("Morgan Disabled.");
}

const helmet = require("helmet");
app.use(helmet());
startupDebug("Helmet Enabled.");

const compression = require("compression");
app.use(compression());
startupDebug("Compression Enabled.");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
startupDebug("BodyParser Enabled.");

const router = require("./routers/router");
app.use(router);
startupDebug("Router Registered.");

startupDebug("APP_ENV: " + process.env.APP_ENV);
const port = process.env.APP_PORT;
console.log("TCC Monolith run on localhost:" + port);

app.listen(port);
