'use strict';

module.exports = {
    setActions (state, { actions }) {
        state.page = actions;
    },

    selectAction (state, { action }) {
        state.selected = action;
    }
};