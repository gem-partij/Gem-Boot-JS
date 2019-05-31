const auth = require("@middleware/CheckAuthentication");

class RouterLib {
	constructor(router) {
		this.router = router;
	}

	crud(path, controllerPath) {
		const Controller = require(controllerPath);

		this.router.get(path + "/", auth, (req, res) => {
			new Controller().index(req, res);
		});
		this.router.get(path + "/:id", auth, (req, res) => {
			new Controller().show(req, res);
		});
		this.router.post(path + "/", auth, (req, res) => {
			new Controller().store(req, res);
		});
		this.router.patch(path + "/:id", auth, (req, res) => {
			new Controller().update(req, res);
		});
		this.router.delete(path + "/:id", auth, (req, res) => {
			new Controller().destroy(req, res);
		});
	}
}

module.exports = RouterLib;
