module.exports = {
	// logger
	// https://www.npmjs.com/package/morgan
	morgan: {
		enable: true
	},
	// rate limiter
	"rate-limiter": {
		enable: false,
		config: {
			windowMs: 10 * 60 * 1000, // 10 minutes
			max: 600 // limit each IP to 600 requests per windowMs
		}
	},
	// security
	// https://www.npmjs.com/package/helmet
	helmet: {
		enable: true
	},
	// response compression
	// https://www.npmjs.com/package/compression
	compression: {
		enable: true
	},
	"body-parser": {
		enable: true
	}
};
