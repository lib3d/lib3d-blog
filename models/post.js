"use strict";

var mongoose = require('mongoose');

module.exports = mongoose.model('Post', new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    date: { type: Date, default: Date.now },
    authors: [ { type: mongoose.Schema.ObjectId, ref: 'User' } ]
}));