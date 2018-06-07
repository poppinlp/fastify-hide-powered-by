const fastify = require('fastify');
const helmet = require('hide-powered-by');
const { host, port, path, rsp } = require('./config');

fastify()
	.use(helmet())
	.get(path, (request, reply) => {
		reply.send(rsp);
	})
	.listen(port, host);
