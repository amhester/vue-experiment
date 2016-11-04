'use strict';

module.exports = {
    log (state, { message }) {
        let log = {};
        if(typeof message === 'string') {
            log.message = message;
        } else if (message instanceof Error) {
            log.message = message.message;
            log.stack = message.stack;
        } else {
            log = message;
        }
        state.log.push(log);
    }
};