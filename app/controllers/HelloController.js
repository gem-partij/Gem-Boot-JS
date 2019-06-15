const Controller = require("gemboot").Controller;

class HelloController extends Controller {
	constructor() {
		super();
	}

	sayHello(req, res) {
		res.send("Hello World!");
	}
}

module.exports = HelloController;
