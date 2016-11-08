'use strict';

const packageConfig    = require('./../package.json');

const Service          = require('geofeedia-server');
const restify          = require('restify');
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

restify.CORS.ALLOW_HEADERS.push("content-type");
restify.CORS.ALLOW_HEADERS.push("content-length");
restify.CORS.ALLOW_HEADERS.push("origin");
restify.CORS.ALLOW_HEADERS.push("accept-language");
restify.CORS.ALLOW_HEADERS.push("accept");
restify.CORS.ALLOW_HEADERS.push("accept-encoding");
restify.CORS.ALLOW_HEADERS.push("cache-control");
restify.CORS.ALLOW_HEADERS.push("connection");
restify.CORS.ALLOW_HEADERS.push("host");
restify.CORS.ALLOW_HEADERS.push("pragma");
restify.CORS.ALLOW_HEADERS.push("referer");
restify.CORS.ALLOW_HEADERS.push("user-agent");

service
	.register(dataset_routes)
	.register(processor_routes)
	.register(action_routes)
	.registerMiddleware((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
		res.header("Access-Control-Allow-Headers", restify.CORS.ALLOW_HEADERS.join( ", " ));
		next();
	})
	.start();