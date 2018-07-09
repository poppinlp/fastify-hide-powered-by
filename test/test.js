import test from 'ava';
import fastify from 'fastify';
import plugin from '../src/index';

test.beforeEach(t => {
	const app = fastify();

	app.get('/', (request, reply) => {
		reply.send('hello world');
	});

	t.context.app = app;
});

const mock = async (t, opts, expected) => {
	const rsp = await t.context.app.register(plugin, opts).inject({
		method: 'get',
		url: '/'
	});
	const header = rsp.headers['x-powered-by'];

	t.is(header, expected);
};

[undefined, {}].forEach(opts => {
	test(`default action should be removing header: ${JSON.stringify(opts)}`, async t => {
		await mock(t, opts, undefined);
	});
});

test('can set the header', async t => {
	await mock(
		t,
		{
			setTo: 'steampowered'
		},
		'steampowered'
	);
});
