"use strict";

const ACTION_TYPES = require('geofeedia-server').ACTION_TYPES;
const locations    = require('./../mock_data/locations.json');
const _            = require('lodash');
const baseUrl      = '/locations';

module.exports = [
    {
        type: 'get',
        route: `${baseUrl}/:id`,
        handler: function getLocationById(req, res, next) {
			let location = _.find(locations, l => l.id === req.params.id);
			if(location === undefined || location === null) {
				res.send(404, "Location with specified id '" + req.params.id + "' not found.");
			} else {
				res.send(200, location);
			}            
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.GET,
        route: `${baseUrl}`,
        handler: function getAllLocations(req, res, next) {
			res.send(200, locations);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/paged`,
        handler: function getPagedLocations(req, res, next) {
			let paginator = req.params.paginator;
			let _locations = _.chain(locations)
								.sortBy(paginator.sortField)
								.remove((v,i) =>  i < ((paginator.currentPage - 1) * paginator.pageSize))
								.take(paginator.pageSize);
			///TODO: probably set some other values on the paginator...
			res.send(200, { paginator: paginator, data: _locations });
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}`,
        handler: function insertLocation(req, res, next) {
			locations.push(req.params.location);
			res.send(200);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.PUT,
        route: `${baseUrl}/:id`,
        handler: function updateLocation(req, res, next) {
			for(let i = 0; i < locations.length; i++) {
				if(locations[i].id === req.params.id) {
					locations[i] = Object.assign({}, locations[i],req.params.location);
					break;
				}
			}
			res.send(200);
            return next();
        }
    },

    {
        type: ACTION_TYPES.DEL,
        route: `${baseUrl}/:id`,
        handler: function deleteLocation(req, res, next) {
            _.remove(locations, l => l.id === req.params.id);
            res.send(200);
            return next();
        }
    }
];