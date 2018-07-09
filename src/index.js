const fp = require('fastify-plugin');

const hidePoweredBy = (app, opts, next) => {
	const HEADER = 'X-Powered-By';
	const value = opts.setTo;

	app.addHook('onSend', (request, reply, payload, next) => {
		value ? reply.header(HEADER, value) : reply.removeHeader(HEADER);
		next();
	});

	next();
};

module.exports = fp(hidePoweredBy, {
	fastify: '^1.0.0',
	name: 'fastify-hide-powered-by'
});
