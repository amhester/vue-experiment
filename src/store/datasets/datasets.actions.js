'use strict';

const datasets = require('./../../services/datasets.service');

module.exports = {
    fetchDatasets ({ commit, rootState }) {
        datasets
            .getPaged(rootState.paginator)
            .then(data => {
                commit({ type: 'setWholePaginator', paginator: data.paginator });
                commit({ type: 'setDatasets', datasets: data.data });
            })
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    findDataset ({ commit }, params) {
        datasets
            .find(params)
            .then(data => commit({ type: 'selectDataset', dataset: data }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    createDataset ({ commit, dispatch }, params) {
        datasets
            .create(params)
            .then(data => dispatch('fetchDatasets'))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    updateDataset ({ commit, dispatch }, params) {
        datasets
            .update(params)
            .then(data => dispatch('fetchDatasets'))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    removeDataset ({ commit, dispatch }, params) {
        datasets
            .remove(params)
            .then(data => dispatch('fetchDatasets'))
            .catch(ex => commit({ type: 'log', message: ex }));
    }
};