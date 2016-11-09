'use strict';

module.exports = {
    changeRoute ({ commit, dispatch }, { route, params }) {
        commit({ type: 'goto', route, params, pushState: true });
        switch (route) {
            case 'datasets':
            case '/datasets':
                dispatch('fetchDatasets');
                break;
            case 'enrichment':
            case '/enrichment':
                dispatch('fetchProcessors');
                break;
            case 'actions':
            case '/actions':
                dispatch('fetchActions');
                break;
        }
    }
};