"use strict";

const ACTION_TYPES = require('geofeedia-server').ACTION_TYPES;
const alerts    = require('./../mock_data/alerts.json');
const _            = require('lodash');
const baseUrl      = '/alerts';

module.exports = [
    {
        type: ACTION_TYPES.GET,
        route: `${baseUrl}/getById/:id`,
        handler: function getAlertById(req, res, next) {
			let alert = _.find(alerts, a => a.id === req.params.id);
			if(alert === undefined || alert === null) {
				res.send(404, "Alert with specified id '" + req.params.id + "' not found.");
			} else {
				res.send(200, alert);
			}            
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.GET,
        route: `${baseUrl}/`,
        handler: function getAllAlerts(req, res, next) {
			res.send(200, alerts);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/getPaged`,
        handler: function getPagedAlerts(req, res, next) {
			let paginator = req.params.paginator;
			let _alerts = _.chain(alerts)
								.sortBy(paginator.sortField)
								.remove((v,i) =>  i < ((paginator.currentPage - 1) * paginator.pageSize))
								.take(paginator.pageSize);
			///TODO: probably set some other values on the paginator...
			res.send(200, { paginator: paginator, data: _alerts });
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/`,
        handler: function insertAlert(req, res, next) {
			alerts.push(req.params.alert);
			res.send(200);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/:id`,
        handler: function updateAlert(req, res, next) {
			for(let i = 0; i < alerts.length; i++) {
				if(alerts[i].id === req.params.id) {
					alerts[i] = Object.assign({}, alerts[i],req.params.alert);
					break;
				}
			}
			///TODO: Probably want to send a 404 if that location isn't found.
			res.send(200);
            return next();
        }
    }
];