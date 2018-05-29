# fastify-hide-powered-by

[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to remove the X-Powered-By header

## Why?

You may know [hide-powered-by](https://github.com/helmetjs/hide-powered-by) as a [hide-powered-by middleware](https://helmetjs.github.io/docs/hide-powered-by/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

Benchmark with no plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 32.37   8.9     1139.09
Req/Sec      30444   1051.31 31048
Bytes/Sec    4.53 MB 170 kB  4.63 MB

609k requests in 20s, 90.7 MB read
```

Benchmark with hide-powered-by as middleware:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev   Max
Latency (ms) 31.03   199.2   9993.7
Req/Sec      26617.6 2156.45 29400
Bytes/Sec    3.97 MB 331 kB  4.38 MB

532k requests in 20s, 79.3 MB read
```

Benchmark with this plugin:

```txt
Running 20s test @ http://127.0.0.1:10290/pudge/rest/v0/benchmark
1000 connections

Stat         Avg     Stdev  Max
Latency (ms) 33.54   6.59   254.92
Req/Sec      29398.4 935.01 30026
Bytes/Sec    4.34 MB 143 kB 4.47 MB

588k requests in 20s, 87.6 MB read
```

So that's the reason and wish you like it. :)

## Install

Via npm:

```shell
npm i fastify-hide-powered-by
```

Via yarn:

```shell
yarn add fastify-hide-powered-by
```

## Usage

```js
const fastify = require('fastify');
const fastifyHidePoweredBy = require('fastify-hide-powered-by');

const app = fastify();
app.register(fastifyHidePoweredBy);

app.listen(3000, err => {
  if (err) throw err;
});
```

## Options

This plugin has the same options as the middleware in helmet.

### setTo {string|undefined}

Default is `undefined` which means remove `X-Powered-By` header. If you set it to a string which means set `X-Powered-By` to that string.

## Changelog

- 0.1.0: Init version

## Todo

- Add test case
- Add ci
- Add benchmark scripts

[lint-img]: https://img.shields.io/badge/code%20style-handsome-brightgreen.svg?style=flat-square
[lint-url]: https://github.com/poppinlp/eslint-config-handsome
[dep-img]: https://img.shields.io/david/poppinlp/fastify-hide-powered-by.svg?style=flat-square
[dep-url]: https://david-dm.org/poppinlp/fastify-hide-powered-by
[dev-dep-img]: https://img.shields.io/david/dev/poppinlp/fastify-hide-powered-by.svg?style=flat-square
[dev-dep-url]: https://david-dm.org/poppinlp/fastify-hide-powered-by#info=devDependencies
[npm-ver-img]: https://img.shields.io/npm/v/fastify-hide-powered-by.svg?style=flat-square
[npm-dl-img]: https://img.shields.io/npm/dm/fastify-hide-powered-by.svg?style=flat-square
[npm-lc-img]: https://img.shields.io/npm/l/fastify-hide-powered-by.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/fastify-hide-powered-by
