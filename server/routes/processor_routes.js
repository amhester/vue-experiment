"use strict";

const ACTION_TYPES = require('geofeedia-server').ACTION_TYPES;
const processors   = require('./../mock_data/processors.json');
const _            = require('lodash');
const baseUrl      = '/processors';

module.exports = [
    {
        type: 'get',
        route: `${baseUrl}/:id`,
        handler: function getProcessorById(req, res, next) {
            let processor = _.find(processors, p => p.id === req.params.id);
            if(!processor) {
                res.send(404, "Processor with specified id '" + req.params.id + "' not found.");
            } else {
                res.send(200, processor);
            }
            return next();
        }
    },

    {
        type: ACTION_TYPES.GET,
        route: `${baseUrl}`,
        handler: function getAllProcessors(req, res, next) {
            res.send(200, processors);
            return next();
        }
    },

    {
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/paged`,
        handler: function getPagedProcessors(req, res, next) {
            let paginator = req.params.paginator;

            let _processors = _.sortBy(processors, paginator.Column);
            if(!paginator.Ascending) {
                _processors = _.reverse(_processors);
            }
            _processors = _.chain(_processors).remove((v,i) =>  i < ((paginator.CurrentPage - 1) * paginator.PageSize)).take(paginator.PageSize).value();

            res.send(200, { paginator: paginator, data: _processors });
            return next();
        }
    },

    {
        type: ACTION_TYPES.POST,
        route: `${baseUrl}`,
        handler: function insertProcessor(req, res, next) {
            processors.push(req.params.processor);
            res.send(200);
            return next();
        }
    },

    {
        type: ACTION_TYPES.PUT,
        route: `${baseUrl}/:id`,
        handler: function updateProcessor(req, res, next) {
            for(let i = 0; i < processors.length; i++) {
                if(processors[i].id === req.params.id) {
                    processors[i] = Object.assign({}, processors[i], req.params.processor);
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
        handler: function deleteProcessor(req, res, next) {
            _.remove(processors, p => p.id === req.params.id);
            res.send(200);
            return next();
        }
    }
];