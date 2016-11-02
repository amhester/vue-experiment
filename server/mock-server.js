'use strict';

const packageConfig    = require('./../package.json');

const Service          = require('geofeedia-server');
const location_routes  = require('./routes/location_routes');
const recording_routes = require('./routes/recording_routes');
const alert_routes     = require('./routes/alert_routes');
const template_routes  = require('./routes/template_routes');

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
	.register(location_routes)
	.register(recording_routes)
	.register(alert_routes)
	.register(template_routes)
	.start();