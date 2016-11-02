'use strict';

const $      = require('jquery');
const config = require('./../app.config.json');
const Q      = require('bluebird');

module.exports = {
    getPaged: function (query, paginator) {
        return new Q(function getPagedLocationsDeferred(resolve, reject) {
            $.ajax({
                url: config.baseUrl + '/locations/paged',
                method: 'POST',
                data: {
                    query: query,
                    paginator: paginator
                },
                contentType: 'application/json',
                dataType: 'json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), err);
                }
            });
        });
    },

    findById: function (id) {
        return new Q(function findLocationByIdDeferred(resolve, reject) {
            $.ajax({
                url: config.baseUrl + '/locations/' + id,
                method: 'GET',
                contentType: 'application/json',
                dataType: 'json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), err);
                }
            });
        });
    },

    create: function (location) {
        return new Q(function createLocationDeferred(resolve, reject) {
            $.ajax({
                url: config.baseUrl + '/locations',
                method: 'POST',
                data: {
                    location: location
                },
                contentType: 'application/json',
                dataType: 'json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), err);
                }
            });
        });
    },

    update: function (location) {
        return new Q(function updateLocationDeferred(resolve, reject) {
            $.ajax({
                url: config.baseUrl + '/locations/' + location.id,
                method: 'PUT',
                data: {
                    location: location
                },
                contentType: 'application/json',
                dataType: 'json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), err);
                }
            });
        });
    },

    remove: function (id) {
        return new Q(function removeLocationDeferred(resolve, reject) {
            $.ajax({
                url: config.baseUrl + '/locations/' + id,
                method: 'DELETE',
                contentType: 'application/json',
                dataType: 'json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), err);
                }
            });
        });
    }
};