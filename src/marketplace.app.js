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
            return store.state.nav.states.filter(s => s.active)[0].alias;
        },

        featuredDatasets () {
            return store.state.datasets.page.filter(d => d.featured);
        },

        datasets () {
            return store.state.datasets.page;
        },

        totalPages () {
            return store.state.paginator.TotalPages;
        },

        currentPage () {
            return store.state.paginator.CurrentPage;
        },

        sortColumn: {
            get () {
                return store.state.paginator.Column;
            },
            set (value) {
                store.commit({ type: 'setSortColumn', column: value });
                store.dispatch('fetchDatasets');
            }
        },

        pageFilter: {
            get () {
                return store.state.paginator.Filters.length ? store.state.paginator.Filters[0].Value : '';
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

//store.dispatch('fetchDatasets');
store.commit({ type: 'goto', route: '/actions', params: {} });