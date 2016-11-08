'use strict';

const state     = require('./datasets.state');
const getters   = require('./datasets.getters');
const mutations = require('./datasets.mutations');
const actions   = require('./datasets.actions');

module.exports = {
    state,
    getters,
    mutations,
    actions
};