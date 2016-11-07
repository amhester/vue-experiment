'use strict';

const packageConfig    = require('./../package.json');

const Service          = require('geofeedia-server');
const dataset_routes   = require('./routes/dataset_routes');
const processor_routes = require('./routes/processor_routes');
const action_routes    = require('./routes/action_routes');

var service = new Service({
	serviceName: packageConfig.name,
	version: packageConfig.version,
	host: '127.0.0.1',
	port: 8048,
	logging: {
		loggers: 'pretty',
		pretty: {
			minLevel: 30
		}
	}
});

service
	.register(dataset_routes)
	.register(processor_routes)
	.register(action_routes)
	.start();