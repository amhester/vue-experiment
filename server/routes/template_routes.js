"use strict";

const ACTION_TYPES = require('geofeedia-server').ACTION_TYPES;
const templates    = require('./../mock_data/templates.json');
const _            = require('lodash');
const baseUrl      = '/templates';

module.exports = [
    {
        type: ACTION_TYPES.GET,
        route: `${baseUrl}/getById/:id`,
        handler: function getTemplateById(req, res, next) {
			let template = _.find(templates, t => t.id === req.params.id);
			if(template === undefined || template === null) {
				res.send(404, "Template with specified id '" + req.params.id + "' not found.");
			} else {
				res.send(200, template);
			}
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.GET,
        route: `${baseUrl}/`,
        handler: function getAllTemplates(req, res, next) {
			res.send(200, templates);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/getPaged`,
        handler: function getPagedTemplates(req, res, next) {
			let paginator = req.params.paginator;
			let _templates = _.chain(templates)
								.sortBy(paginator.sortField)
								.remove((v,i) =>  i < ((paginator.currentPage - 1) * paginator.pageSize))
								.take(paginator.pageSize);
			///TODO: probably set some other values on the paginator...
			res.send(200, { paginator: paginator, data: _templates });
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/`,
        handler: function insertTemplate(req, res, next) {
			templates.push(req.params.template);
			res.send(200);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/:id`,
        handler: function updateTemplate(req, res, next) {
			for(let i = 0; i < templates.length; i++) {
				if(templates[i].id === req.params.id) {
					templates[i] = Object.assign({}, templates[i],req.params.template);
					break;
				}
			}
			///TODO: Probably want to send a 404 if that template isn't found.
			res.send(200);
            return next();
        }
    }
];