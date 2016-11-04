'use strict';

module.exports = {
    setProcessors (state, { processors }) {
        state.page = processors;
    },

    selectProcessor (state, { processor }) {
        state.selected = processor;
    }
};