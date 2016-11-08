'use strict';

module.exports = {
    featuredDatasets ({ page }) {
        return page.filter(d => d.featured);
    },

    datasetsPage ({ page }) {
        return page;
    }
};