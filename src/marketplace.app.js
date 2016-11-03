'use strict';

const Vue       = require('vue');
const $         = require('jquery');
const bootstrap = require('bootstrap');
const store     = require('./store/marketplace.store');

const MarketPlace = new Vue({
    el: '#App',
    store
});