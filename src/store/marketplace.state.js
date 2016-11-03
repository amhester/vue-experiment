'use strict';

///TODO: break these top level state properties into modules, as that seems like a useful abstraction
module.exports = {
    history: [],
    nav: {
        stateParams: {},
        redirect: {
            '/': '/datasets'
        },
        states: [
            { route: '/datasets', alias: 'datasets', displayName: 'Datasets', active: false, defaultState: true },
            { route: '/enrichment', alias: 'enrichment', displayName: 'Enrichments', active: false },
            { route: '/actions', alias: 'actions', displayName: 'Actions', active: false }
        ]
    },
    datasets: [],
    processors: [],
    actions: [],
    authContext: {
        isAuthenticated: false,
        passport: {},
        user: {
            id: 0,
            username: '',
            email: '',
            displayName: '',
            imageUrl: ''
        },
        account: {}
    }
};