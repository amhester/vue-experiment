'use strict';

const actions = require('./../../services/actions.service');

module.exports = {
    fetchActions ({ commit, rootState }) {
        actions
            .getPaged(rootState.paginator)
            .then(data => commit({ type: 'setActions', actions: data }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    findAction ({ commit }, params) {
        actions
            .find(params)
            .then(data => commit({ type: 'selectAction', action: data }))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    createAction ({ commit, dispatch }, params) {
        actions
            .create(params)
            .then(data => dispatch('fetchActions'))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    updateAction ({ commit, dispatch }, params) {
        actions
            .update(params)
            .then(data => dispatch('fetchActions'))
            .catch(ex => commit({ type: 'log', message: ex }));
    },

    removeAction ({ commit, dispatch }, params) {
        actions
            .remove(params)
            .then(data => dispatch('fetchActions'))
            .catch(ex => commit({ type: 'log', message: ex }));
    }
};