module.exports = {
	morgan: {
		enable: true
	},
	"rate-limiter": {
		enable: false,
		config: {
			windowMs: 10 * 60 * 1000, // 10 minutes
			max: 600 // limit each IP to 600 requests per windowMs
		}
	},
	helmet: {
		enable: true
	},
	compression: {
		enable: true
	},
	"body-parser": {
		enable: true
	}
};
