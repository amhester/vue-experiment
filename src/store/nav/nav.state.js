'use strict';

module.exports = {
    stateParams: {},
    redirect: {
        '/': '/datasets'
    },
    states: [
        { route: '/datasets', alias: 'datasets', displayName: 'Datasets', active: false, defaultState: true },
        { route: '/enrichment', alias: 'enrichment', displayName: 'Enrichments', active: false },
        { route: '/actions', alias: 'actions', displayName: 'Actions', active: false }
    ]
};