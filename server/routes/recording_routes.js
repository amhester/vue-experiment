"use strict";

const ACTION_TYPES = require('geofeedia-server').ACTION_TYPES;
const recordings   = require('./../mock_data/recordings.json');
const _            = require('lodash');
const baseUrl      = '/recordings';

module.exports = [
    {
        type: ACTION_TYPES.GET,
        route: `${baseUrl}/getById/:id`,
        handler: function getRecordingById(req, res, next) {
			let recording = _.find(recordings, r => r.id === req.params.id);
			if(recording === undefined || recording === null) {
				res.send(404, "Recording with specified id '" + req.params.id + "' not found.");
			} else {
				res.send(200, recording);
			}            
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.GET,
        route: `${baseUrl}/`,
        handler: function getAllRecordings(req, res, next) {
			res.send(200, recordings);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/getPaged`,
        handler: function getPagedRecordings(req, res, next) {
			let paginator = req.params.paginator;
			let _recordings = _.chain(recordings)
								.sortBy(paginator.sortField)
								.remove((v,i) =>  i < ((paginator.currentPage - 1) * paginator.pageSize))
								.take(paginator.pageSize);
			///TODO: probably set some other values on the paginator...
			res.send(200, { paginator: paginator, data: _recordings });
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/`,
        handler: function insertRecording(req, res, next) {
			recordings.push(req.params.recording);
			res.send(200);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/:id`,
        handler: function updateRecording(req, res, next) {
			for(let i = 0; i < recordings.length; i++) {
				if(recordings[i].id === req.params.id) {
					recordings[i] = Object.assign({}, recordings[i],req.params.recording);
					break;
				}
			}
			///TODO: Probably want to send a 404 if that location isn't found.
			res.send(200);
            return next();
        }
    }
];