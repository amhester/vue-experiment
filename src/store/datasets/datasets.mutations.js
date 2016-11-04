'use strict';

module.exports = {
    setDatasets (state, { datasets }) {
        state.page = datasets;
    },

    selectDataset (state, { dataset }) {
        state.selected = dataset;
    }
};