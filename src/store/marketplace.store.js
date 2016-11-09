'use strict';

const Vue         = require('vue/dist/vue.js');
const Vuex        = require('vuex');
const actions     = require('./actions/actions.module');
const authContext = require('./authContext/authContext.module');
const datasets    = require('./datasets/datasets.module');
const _history    = require('./history/history.module');
const log         = require('./log/log.module');
const nav         = require('./nav/nav.module');
const paginator   = require('./paginator/paginator.module');
const processors  = require('./processors/processors.module');
const plugins     = require('./plugins/marketplace.plugins.js');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    modules: {
        history: _history,
        actions,
        authContext,
        datasets,
        log,
        nav,
        paginator,
        processors
    },
    plugins
});