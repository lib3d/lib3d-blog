var serverLauncher = require('./serverLauncher');
var server = serverLauncher();
var restApi = require('./restApi');

restApi(server.application);