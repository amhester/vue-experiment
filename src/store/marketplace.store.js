'use strict';

const Vue       = require('vue');
const Vuex      = require('vuex');
const state     = require('./marketplace.state');
const getters   = require('./marketplace.getters');
const mutations = require('./marketplace.mutations');
const actions   = require('./marketplace.actions');
const plugins   = require('./marketplace.plugins');

Vue.use(Vuex);

module.exports = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins
});