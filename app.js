/* jshint node:true */
process.env.NODE_ENV = process.argv[2] || 'no_env';

var serverLauncher = require('./serverLauncher');
var server = serverLauncher();
var restApi = require('./restApi');

restApi(server.application);