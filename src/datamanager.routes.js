'use strict';

const locationsVM  = require('./locations/locations.controller.js');
const recordingsVM = require('./recordings/recordings.controller.js');

module.exports = [
    { path: '/', redirect: '/locations' },
    { path: '/locations', component: locationsVM },
    { path: '/recordings/:state', component: recordingsVM }
];