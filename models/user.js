"use strict";

var mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    pseudo: { type: String }
}));