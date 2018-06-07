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

const testHandler = (t, opts, expectedHeader) => {
	const { app } = t.context;

	t.plan(3);
	app.register(plugin, opts);
	app.inject(
		{
			method: 'GET',
			url: '/'
		},
		(err, res) => {
			const expected = {
				payload: 'hello world',
				header: expectedHeader
			};
			const target = {
				payload: res.payload,
				header: res.headers['x-powered-by']
			};

			t.is(err, null, 'should throw no error');
			t.is(target.payload, expected.payload, 'should have expected response payload');
			t.is(target.header, expected.header, 'should have expected response header');
			t.end();
		}
	);
};

test.cb('default option', t => {
	testHandler(t, {}, undefined);
});

test.cb('set setTo to foobar', t => {
	testHandler(
		t,
		{
			setTo: 'foobar'
		},
		'foobar'
	);
});
