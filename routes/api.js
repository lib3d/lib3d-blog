var Post = require('../models/post')

exports.postList = function(req, res) {
    Post.find(function(err, users) {
        res.end(JSON.stringify(users, null, '\t'));
    });
};

exports.postSave = function(req, res) {
    var _id = req.params._id;
    if(_id) {
        delete req.body._id;
        Post.update({_id: _id}, req.body, function(err, data) {
            res.end(JSON.stringify(data));
        });
    } else {
        new Post(req.body).save(function(err, data) {
            res.end(JSON.stringify(data));
        });
    }
};

exports.postDelete = function(req, res) {
    Post.findOne({_id: req.params._id}, function(err, post) {
        post.remove(function(err) {
            res.end('removed');
        });
    });
};