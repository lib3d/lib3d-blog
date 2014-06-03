/* jshint node:true */
"use strict";

var api = require('./routes/api');
var mongoose = require('mongoose');

module.exports = function(app) {
    mongoose.connect('mongodb://localhost:27017/lib3d');
    app.get('/posts/:_id', api.postGet);
    app.get('/posts', api.postList);
    app.post('/posts/:_id', api.postSave);
    app.post('/posts', api.postSave);
    app.delete('/posts/:_id', api.postDelete);
};