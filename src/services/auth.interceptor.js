'use strict';

const $           = require('jquery');
const authService = require('./services/auth.service.js');

$(document).on('ajaxSend', function tokenHeader(e, xhr, settings) {
    let token = authService.token;
    if(token) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    } else {
        xhr.abort();
    }
});