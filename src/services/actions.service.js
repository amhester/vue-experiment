'use strict';

const Q       = require('bluebird');
const baseUrl = require('./../app.config').baseUrl + '/actions';
const $       = require('jquery');

module.exports = {
    getPaged ({ paginator }) {
        return new Q((resolve, reject) => {
            $.ajax({
                url: baseUrl + '/paged',
                method: 'POST',
                data: { paginator },
                contentType: 'application/json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), message, err);
                }
            });
        });
    },

    find ({ id }) {
        return new Q((resolve, reject) => {
            $.ajax({
                url: baseUrl + '/' + id,
                method: 'GET',
                contentType: 'application/json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), message, err);
                }
            });
        });
    },

    create ({ action }) {
        return new Q((resolve, reject) => {
            $.ajax({
                url: baseUrl + '/',
                method: 'POST',
                data: { action },
                contentType: 'application/json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), message, err);
                }
            });
        });
    },

    update ({ action }) {
        return new Q((resolve, reject) => {
            $.ajax({
                url: baseUrl + '/' + action.id,
                method: 'PUT',
                data: { action },
                contentType: 'application/json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), message, err);
                }
            });
        });
    },

    remove ({ id }) {
        return new Q((resolve, reject) => {
            $.ajax({
                url: baseUrl + '/' + id,
                method: 'DELETE',
                contentType: 'application/json',
                timeout: 10000,
                success: data => {
                    resolve(data);
                },
                error: (xhr, message, err) => {
                    reject(xhr.statusCode(), message, err);
                }
            });
        });
    }
};