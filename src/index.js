const fp = require('fastify-plugin');

const hidePoweredBy = (app, opts, next) => {
	const { setTo } = opts;

	app.addHook('onSend', (request, reply, payload, next) => {
		setTo ? reply.header('X-Powered-By', setTo) : reply.removeHeader('X-Powered-By');
		next();
	});

	next();
};

module.exports = fp(hidePoweredBy, {
	fastify: '^1.0.0',
	name: 'fastify-hide-powered-by'
});
