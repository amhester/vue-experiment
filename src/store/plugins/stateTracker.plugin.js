'use strict';

const parse = require('./../services/querystring.service.js').parse;

module.exports = store => {
    let route  = location.pathname,
        params = parse(location.search);

    store.commit({
        type: 'goto',
        route,
        params
    });

    window.onpopstate = event => {
        let route  = location.pathname,
            params = event.state || parse(location.search);

        store.commit({
            type: 'goto',
            route,
            params
        });
    };
};