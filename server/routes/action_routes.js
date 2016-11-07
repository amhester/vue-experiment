"use strict";

const ACTION_TYPES = require('geofeedia-server').ACTION_TYPES;
const actions      = require('./../mock_data/actions.json');
const _            = require('lodash');
const baseUrl      = '/actions';

module.exports = [
    {
        type: 'get',
        route: `${baseUrl}/:id`,
        handler: function getActionById(req, res, next) {
            let action = _.find(actions, a => a.id === req.params.id);
            if(!action) {
                res.send(404, "Action with specified id '" + req.params.id + "' not found.");
            } else {
                res.send(200, action);
            }
            return next();
        }
    },

    {
        type: ACTION_TYPES.GET,
        route: `${baseUrl}`,
        handler: function getAllActions(req, res, next) {
            res.send(200, actions);
            return next();
        }
    },

    {
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/paged`,
        handler: function getPagedActions(req, res, next) {
            let paginator = req.params.paginator;

            let _actions = _.sortBy(actions, paginator.Column);
            if(!paginator.Ascending) {
                _actions = _.reverse(_actions);
            }
            _actions = _.chain(_actions).remove((v,i) =>  i < ((paginator.CurrentPage - 1) * paginator.PageSize)).take(paginator.PageSize).value();

            res.send(200, { paginator: paginator, data: _actions });
            return next();
        }
    },

    {
        type: ACTION_TYPES.POST,
        route: `${baseUrl}`,
        handler: function insertAction(req, res, next) {
            actions.push(req.params.action);
            res.send(200);
            return next();
        }
    },

    {
        type: ACTION_TYPES.PUT,
        route: `${baseUrl}/:id`,
        handler: function updateAction(req, res, next) {
            for(let i = 0; i < actions.length; i++) {
                if(actions[i].id === req.params.id) {
                    actions[i] = Object.assign({}, actions[i], req.params.action);
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
        handler: function deleteAction(req, res, next) {
            _.remove(actions, a => a.id === req.params.id);
            res.send(200);
            return next();
        }
    }
];