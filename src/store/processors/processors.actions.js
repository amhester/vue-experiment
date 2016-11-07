'use strict';

const processors = require('./../../services/processors.service');

module.exports = {
    fetchProcessors ({ commit, rootState }) {
        processors
            .getPaged({ paginator: rootState.paginator })
            .then(data => commit({ type: 'setProcessors', processors: data }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    findProcessor ({ commit }, params) {
        processors
            .find(params)
            .then(data => commit({ type: 'selectProcessor', processor: data }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    createProcessor ({ commit, dispatch }, params) {
        processors
            .create(params)
            .then(data => dispatch('fetchProcessors'))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    updateProcessor ({ commit, dispatch }, params) {
        processors
            .update(params)
            .then(data => dispatch('fetchProcessors'))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    removeProcessor ({ commit, dispatch }, params) {
        processors
            .remove(params)
            .then(data => dispatch('fetchProcessors'))
            .catch(ex => commit({ type: 'log', message: ex }));
    }
};