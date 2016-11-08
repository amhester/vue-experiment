'use strict';

const _ = require('lodash');

module.exports = {
    goto (nav, { route, params }) {
        nav.stateParams = params;
        if(nav.redirect.hasOwnProperty(route)) {
            route = nav.redirect[route];
        }
        let idx = _.findIndex(nav.states, s => s.route === route || s.alias === route);
        nav.states.forEach(s => s.active = false);
        if(idx > -1) {
            nav.states[idx].active = true;
            history.pushState(params, nav.states[idx].alias, nav.states[idx].route);
        } else {
            for(let i = 0; i < nav.states.length; i++) {
                if(nav.states[i].hasOwnProperty('defaultState')) {
                    nav.states[i].active = true;
                    history.pushState(params, nav.states[i].alias, nav.states[i].route);
                    break;
                }
            }
        }
    }
};