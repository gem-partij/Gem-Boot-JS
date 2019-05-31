class CrudController {
	init() {
		this._repo = null;
	}

	constructor() {
		if (new.target === CrudController) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}

		const mustOverride = ["index", "show", "store", "update", "destroy"];

		for (var i = 0; i < mustOverride.length; i++) {
			if (this[mustOverride[i]] === undefined) {
				throw new TypeError("Must override " + mustOverride[i]);
			}
		}

		this.init();
	}

	set repo(repo) {
		this._repo = repo;
	}

	get repo() {
		return this._repo;
	}

	// GET /
	index(req, res) {
		this.repo
			.getAll()
			.then(data => {
				res.send(JSON.stringify(data));
			})
			.catch(err => {
				res.status(500).send(err.message);
			});
	}

	// GET /:id
	show(req, res) {
		if (req.params.id) {
			this.repo
				.getOne(req.params.id)
				.then(data => {
					res.send(JSON.stringify(data));
				})
				.catch(err => {
					res.status(500).send(err.message);
				});
		} else {
			res.status(400).send("Required params");
		}
	}

	// POST /
	store(req, res) {
		this.repo
			.insert(req.body)
			.then(response => {
				res.send(JSON.stringify(response));
			})
			.catch(err => {
				res.status(500).send(err.message);
			});
	}

	// PATCH /:id
	update(req, res) {
		if (req.params.id) {
			this.repo
				.update(req.body, req.params.id)
				.then(response => {
					res.send(JSON.stringify(response));
				})
				.catch(err => {
					res.status(500).send(err.message);
				});
		} else {
			res.status(400).send("Required params");
		}
	}

	// DELETE /:id
	destroy(req, res) {
		if (req.params.id) {
			this.repo
				.delete(req.params.id)
				.then(response => {
					res.send(JSON.stringify(response));
				})
				.catch(err => {
					res.status(500).send(err.message);
				});
		} else {
			res.status(400).send("Required params");
		}
	}
}

module.exports = CrudController;
