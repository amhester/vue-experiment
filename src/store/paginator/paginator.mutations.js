'use strict';

module.exports = {
    changePage (state, { page }) {
        if(page > 0 && page < state.TotalPages) {
            state.CurrentPage = page;
        }
    },

    turnPage (state, { amount }) {
        state.CurrentPage += amount;
        if(state.CurrentPage < 1) state.CurrentPage = 1;
        if(state.CurrentPage > state.TotalPages) state.CurrentPage = state.TotalPages;
    },

    setSortColumn (state, { column }) {
        state.Column = column;
    },

    setSortDirection (state, { dir }) {
        state.Ascending = dir === 'asc';
    },

    flipSortDirection (state) {
        state.Ascending = !state.Ascending;
    },

    setPageFilter (state, { filter }) {
        if(filter.Column && filter.Value) {
            state.Filters = [filter];
        }
    },

    setWholePaginator (state, { paginator }) {
        state = paginator;
    }
};