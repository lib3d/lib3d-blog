
/*
 * GET users listing.
 */

var User = require('../models/user');

exports.list = function(req, res){
    User.find(function(err, users) {
        res.end(JSON.stringify(users, null, '\t'));
    });
};