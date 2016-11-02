'use strict';

const $      = require('jquery');
const config = require('./../app.config.json');
const jwt    = require('jsonwebtoken');

class AuthService {
    constructor () {
        this.context = null;
    }

    getCredentialsToken (username, password) {

    }

    refreshToken () {

    }

    signOut () {

    }

    register () {

    }

    get authContext () {
        if (this.context === null) {
            let token = localStorage.get('token');
            if (token) {
                this.context = jwt.decode(token, { json: true });
                return this.context;
            } else {
                return null;
            }
        } else {
            return this.context;
        }
    }

    get token () {
        let token = localStorage.get('token');
        return token ? token : '';
    }

    set token (newVal) {
        localStorage.set('token', newVal);
    }
}

const authService = new AuthService();

module.exports = authService;