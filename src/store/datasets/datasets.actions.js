'use strict';

const datasets = require('./../../services/datasets.service');

///TODO: Change the parameters to grab the global state obj instead of the local one to this module
module.exports = {
    fetchDatasets ({ commit }, params) {
        datasets
            .getPaged(params)
            .then(data => commit({ type: 'setDatasets', datasets: data }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    findDataset ({ commit }, params) {
        datasets
            .find(params)
            .then(data => commit({ type: 'selectDataset', dataset: data }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    createDataset ({ commit, dispatch, state }, params) {
        datasets
            .create(params)
            .then(data => dispatch('fetchDatasets', { paginator: state.paginator }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    updateDataset ({ commit, dispatch, state }, params) {
        datasets
            .update(params)
            .then(data => dispatch('fetchDatasets', { paginator: state.paginator }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    removeDataset ({ commit, dispatch, state }, params) {
        datasets
            .remove(params)
            .then(data => dispatch('fetchDatasets', { paginator: state.paginator }))
            .catch(ex => commit({ type: 'log', message: ex }));
    }
};