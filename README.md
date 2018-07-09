# fastify-hide-powered-by

[![Build Status][ci-img]][ci-url]
[![Code coverage][cov-img]][cov-url]
[![Code style][lint-img]][lint-url]
[![Dependency Status][dep-img]][dep-url]
[![Dev Dependency Status][dev-dep-img]][dev-dep-url]
[![NPM version][npm-ver-img]][npm-url]
[![NPM downloads][npm-dl-img]][npm-url]
[![NPM license][npm-lc-img]][npm-url]

Fastify plugin to remove the X-Powered-By header

## Why?

You may know [hide-powered-by](https://github.com/helmetjs/hide-powered-by) as a [hide-powered-by middleware](https://helmetjs.github.io/docs/hide-powered-by/) used in [helmet](https://github.com/helmetjs/helmet). And you could use it as a middleware in fastify also. So why i made this plugin?

You may find the reason in [benchmark result](./benchmarks/benchmark.txt) and wish you like it. :)

## Difference

This plugin has passed all [hide-powered-by](https://github.com/helmetjs/hide-powered-by) test cases.
And no difference in options.

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

Default is `undefined` which means remove `X-Powered-By` header. You could pass a string in to set `X-Powered-By` to that.

## Changelog

- 0.3.0
  - Update test case
- 0.2.0
  - Add test case
  - Add code coverage
  - Add benchmarks
- 0.1.0:
  - Init version

[ci-img]: https://img.shields.io/travis/poppinlp/fastify-hide-powered-by.svg?style=flat-square
[ci-url]: https://travis-ci.org/poppinlp/fastify-hide-powered-by
[cov-img]: https://img.shields.io/coveralls/poppinlp/fastify-hide-powered-by.svg?style=flat-square
[cov-url]: https://coveralls.io/github/poppinlp/fastify-hide-powered-by?branch=master
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
