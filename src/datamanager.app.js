'use strict';

const Vue       = require('vue');
const VueRouter = require('vue-router');
const routes    = require('./datamanager.routes.js');

Vue.use(VueRouter);

const router = new VueRouter({ routes: routes });

const DataManager = new Vue({ router: router }).$mount('#DataManager');