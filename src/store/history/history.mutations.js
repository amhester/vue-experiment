'use strict';

module.exports = {
    pushHistory (state, { type, payload }) {
        state.history.push({ type, payload });
    }
};