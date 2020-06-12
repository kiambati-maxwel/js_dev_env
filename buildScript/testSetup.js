// this file isnt transpiled must be writen in common js

// register babel to transpile before test runs
require('babel-register')();

// disable webpack features that mocha doesnt understand
require.extensions['.css'] = function () {};

