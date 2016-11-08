'use strict';

module.exports = {
    activeState ({ states }) {
        return states.filter(s => s.active)[0].alias;
    }
};