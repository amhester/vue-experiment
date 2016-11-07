'use strict';

const Q       = require('bluebird');
const baseUrl = require('./../../app.config').baseUrl + '/processors';
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

    create ({ processor }) {
        return new Q((resolve, reject) => {
            $.ajax({
                url: baseUrl + '/',
                method: 'POST',
                data: { processor },
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

    update ({ processor }) {
        return new Q((resolve, reject) => {
            $.ajax({
                url: baseUrl + '/' + processor.id,
                method: 'PUT',
                data: { processor },
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