'use strict';

const Vue       = require('vue/dist/vue.js');
const $         = require('jquery');
const store     = require('./store/marketplace.store');

const MarketPlace = new Vue({
    el: '#App',
    store,
    data: {

    },
    computed: {
        activeState () {
            return store.getters.activeState;
        },

        featuredDatasets () {
            return store.getters.featuredDatasets;
        },

        datasets () {
            return store.getters.datasetsPage;
        },

        totalPages () {
            return store.getters.totalPages;
        },

        currentPage () {
            return store.getters.currentPage;
        },

        sortColumn: {
            get () {
                return store.getters.column;
            },
            set (value) {
                store.commit({ type: 'setSortColumn', column: value });
                store.dispatch('fetchDatasets');
            }
        },

        pageFilter: {
            get () {
                return store.getters.filter;
            },
            set (value) {
                store.commit({ type: 'setPageFilter', filter: { Column: 'name', Value: value } });
            }
        }
    },
    methods: {
        turnPage (amount) {
            store.commit({ type: 'turnPage', amount });
            store.dispatch('fetchDatasets');
        },

        changePage (page) {
            store.commit({ type: 'changePage', page });
            store.dispatch('fetchDatasets');
        }
    }
});

store.dispatch('fetchDatasets');
//store.commit({ type: 'goto', route: '/actions', params: {} });