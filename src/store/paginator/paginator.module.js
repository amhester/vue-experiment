'use strict';

const state     = require('./paginator.state');
const getters   = require('./paginator.getters');
const mutations = require('./paginator.mutations');
const actions   = require('./paginator.actions');

module.exports = {
    state,
    getters,
    mutations,
    actions
};