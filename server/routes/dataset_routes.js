"use strict";

const ACTION_TYPES = require('geofeedia-server').ACTION_TYPES;
const datasets     = require('./../mock_data/datasets.json');
const _            = require('lodash');
const baseUrl      = '/datasets';

module.exports = [
    {
        type: 'get',
        route: `${baseUrl}/:id`,
        handler: function getDatasetById(req, res, next) {
			let dataset = _.find(datasets, d => d.id === req.params.id);
			if(!dataset) {
				res.send(404, "Dataset with specified id '" + req.params.id + "' not found.");
			} else {
				res.send(200, dataset);
			}
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.GET,
        route: `${baseUrl}`,
        handler: function getAllDatasets(req, res, next) {
			res.send(200, datasets);
            return next();
        }
    },

	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}/paged`,
        handler: function getPagedDatasets(req, res, next) {
			let paginator = req.params.paginator;

			let _datasets = _.sortBy(datasets, paginator.Column);
            if(!paginator.Ascending) {
                _datasets = _.reverse(_datasets);
            }
            _.remove(_datasets, (v,i) => i < ((paginator.CurrentPage - 1) * paginator.PageSize));
            _datasets = _.take(_datasets, paginator.PageSize);

            paginator.TotalItemCount = _datasets.length;
            paginator.TotalPages = Math.ceil(datasets.length / paginator.PageSize);

			res.send(200, { paginator: paginator, data: _datasets });
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.POST,
        route: `${baseUrl}`,
        handler: function insertDataset(req, res, next) {
			datasets.push(req.params.dataset);
			res.send(200);
            return next();
        }
    },
	
	{
        type: ACTION_TYPES.PUT,
        route: `${baseUrl}/:id`,
        handler: function updateDataset(req, res, next) {
			for(let i = 0; i < datasets.length; i++) {
				if(datasets[i].id === req.params.id) {
					datasets[i] = Object.assign({}, datasets[i], req.params.dataset);
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
        handler: function deleteDataset(req, res, next) {
            _.remove(datasets, d => d.id === req.params.id);
            res.send(200);
            return next();
        }
    }
];