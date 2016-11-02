'use strict';

const locationService = require('./locations.service.js');
const $               = require('jquery');

var locationsVM = {
    template: $('#LoactionsTemplate').html(),
    data: {
        locations: [],
        paginator: {}
    },
    methods: {

    }
};

module.exports = locationsVM;