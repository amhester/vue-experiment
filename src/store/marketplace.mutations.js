'use strict';

const _ = require('lodash');

module.exports = {
    goto (state, { route, params }) {
        state.nav.stateParams = params;
        if(state.nav.redirect.hasOwnProperty(route)) {
            route = state.nav.redirect[route];
        }
        let idx = _.findIndex(state.nav.states, s => s.route === route || s.alias === route);
        state.nav.states.forEach(s => s.active = false);
        if(idx > -1) {
            state.nav.states[idx].active = true;
        } else {
            for(let i = 0; i < state.nav.states.length; i++) {
                if(state.nav.states[i].hasOwnProperty('defaultState')) {
                    state.nav.states[i].active = true;
                    break;
                }
            }
        }
    },

    pushHistory (state, { type, payload }) {
        state.history.push({ type, payload });
    },

    setDatasets (state, { datasets }) {
        state.datasets = datasets;
    },

    setProcessors (state, { processors }) {
        state.processors = processors;
    },

    setActions (state, { actions }) {
        state.actions = actions;
    }
};