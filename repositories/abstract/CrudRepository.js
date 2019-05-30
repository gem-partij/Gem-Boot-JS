class CrudRepository {
	init() {
		this._model = null;
		this._orm = null;
	}

	constructor() {
		if (new.target === CrudRepository) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}

		const mustOverride = ["getAll", "getOne", "insert", "update", "delete"];

		for (var i = 0; i < mustOverride.length; i++) {
			if (this[mustOverride[i]] === undefined) {
				throw new TypeError("Must override " + mustOverride[i]);
			}
		}

		this.init();
	}

	set model(model) {
		this._model = model;
	}

	get model() {
		return this._model;
	}

	set orm(orm) {
		this._orm = orm;
	}

	get orm() {
		return this._orm;
	}

	getAll(options = null) {
		if (options === null) {
			options = {
				limit: 30,
				offset: 0,
				order: [["id", "DESC"]],
				attributes: this.model.unprotectedAttributes()
			};
		}
		return this.orm.findAll(options);
	}

	getOne(id) {
		console.log(this.orm.attributes);
		return this.orm.findByPk(id, {
			attributes: this.model.unprotectedAttributes()
		});
	}

	insert(data) {
		return this.orm.create(data);
	}

	update(data, id) {
		const row = this.orm.findByPk(id);
		const keys = data.keys();

		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];
			row.set(k, data[k]);
		}
		return row.save();
	}

	delete(id) {
		const pk = this.model.primaryKey();
		return this.orm.destroy({
			where: {
				[pk]: id
			}
		});
	}
}

module.exports = CrudRepository;
