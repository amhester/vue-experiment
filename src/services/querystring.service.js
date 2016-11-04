'use strict';

//This doesn't take into url serialized arrays or objects, but idc cause I got it to fit on one line lol
exports.parse = querystring => querystring ? Object.assign.apply(null, querystring.slice(1).split(/\&/g).map(k => { let p = k.split(/\=/); return { [p[0]]: p[1] }; })) : null;