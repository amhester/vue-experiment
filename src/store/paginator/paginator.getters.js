'use strict';

module.exports = {
    totalPages ({ TotalPages }) {
        return TotalPages;
    },

    currentPage ({ CurrentPage }) {
        return CurrentPage;
    },

    column ({ Column }) {
        return Column;
    },

    filter ({ Filters }) {
        return Filters.length ? Filters[0].Value : '';
    }
};